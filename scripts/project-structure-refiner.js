const fs = require('fs');
const path = require('path');

console.log('\x1b[36m%s\x1b[0m', '🧹 Cleaning process is starting ...');

const directoriesToDelete = [
  'src/components/settings',
  'src/components/svgs/global',
  'src/components/tab/home/users-card',
  'src/components/ui/RadioButton.tsx',
  'src/components/ui/GlobalHeader.tsx',
  'src/hooks/useHomeUsers.tsx',
  'src/i18n/locales/en/data.ts',
  'src/i18n/locales/en/home.ts',
  'src/i18n/locales/tr/data.ts',
  'src/i18n/locales/tr/home.ts',
  'src/navigation/HomeNavigator.tsx',
  'src/screens/settings',
  'src/screens/splash',
];
const directoriesToClean = ['src/assets/images'];

const filesToModify = [
  {
    path: 'src/components/ui/types.ts',
    pattern: /\nexport type GlobalHeaderProps = {[\s\S]*?};\n/,
    replacement: '',
  },
  {
    path: 'src/components/ui/types.ts',
    pattern: /\nexport interface RadioButtonProps {[\s\S]*?}\n/,
    replacement: '',
  },
  {
    path: 'src/helpers/getSvg.tsx',
    pattern:
      /import GlobalBackSvg[\s\S]*?import GlobalCloseSvg[\s\S]*?import GlobalSettingsSvg[\s\S]*?;\n/,
    replacement: '',
  },
  {
    path: 'src/helpers/getSvg.tsx',
    pattern: /\nconst globalSvg[\s\S]*?};\n/,
    replacement: '',
  },
  {
    path: 'src/helpers/getSvg.tsx',
    pattern: /\nconst getGlobalSvg[\s\S]*?};\n/,
    replacement: '',
  },
  {
    path: 'src/helpers/getSvg.tsx',
    pattern: /export { getTabSvg, getGlobalSvg };/,
    replacement: 'export { getTabSvg };',
  },
  {
    path: 'src/navigation/MainNavigator.tsx',
    pattern: /import HomeNavigator[\s\S]*?;\n/,
    replacement: '',
  },
  {
    path: 'src/navigation/MainNavigator.tsx',
    pattern:
      /\s+<Main\.Screen name="HomeNavigator" component={HomeNavigator} \/>/,
    replacement: '',
  },
  {
    path: 'src/navigation/types.ts',
    pattern: /\s+HomeNavigator: NavigatorScreenParams<HomeStack>;/,
    replacement: '',
  },
  {
    path: 'src/navigation/types.ts',
    pattern: /\n\/\/ Home stack[\s\S]*?>;\n/,
    replacement: '',
  },
  {
    path: 'src/types/i18next.d.ts',
    pattern: /\s+data: typeof locale\.data;|\s+home: typeof locale\.home;/g,
    replacement: '',
  },
];

const i18nTranslationsTemplate = `// Sibling Directory Imports (Relative)
import global from './global';

export default {
  global,
};
`;

const basicComponentTemplate = (componentName, screenName) => {
  return `// React & React Native
import React from 'react';
import { Text, View } from 'react-native';

// Third-Party Libraries
import { useTheme } from '@react-navigation/native';

// Sibling Directory Imports (Relative)
import createStyles from './styles';
import type { ${componentName}Props } from './types';

const ${componentName} = ({}: ${componentName}Props) => {
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>${screenName}</Text>
    </View>
  );
};

export default ${componentName};\n`;
};

const basicStylesTemplate = text => {
  return `// React & React Native
import { StyleSheet } from 'react-native';

// Internal Imports (Absolute)
import type { AppTheme } from '@theme/types';

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },${
      text
        ? `
    text: {
      color: colors.secondary,
      fontSize: 16,
      fontWeight: 'medium',
    },`
        : ''
    }
  });

export default createStyles;
`;
};

const basicTypesTemplate = (componentName, screenName, stack) => {
  let template = `// Internal Imports (Absolute)
import type { ${stack}ScreenProps } from '@navigation/types';\n\n`;

  if (componentName.includes('Profile') || componentName.includes('Splash')) {
    template += `export interface ${componentName}Props
  extends ${stack}ScreenProps<'${screenName}'> {}\n`;
  }
  if (componentName.includes('Home')) {
    template += `export interface ${componentName}Props extends ${stack}ScreenProps<'${screenName}'> {}\n`;
  }

  return template;
};

const basicScreenTemplate = (folder, componentName, screenName) => {
  return `// React & React Native
import React from 'react';

// Third-Party Libraries
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Internal Imports (Absolute)
import ${componentName} from '@components/tab/${folder}/content/${componentName}';

// Sibling Directory Imports (Relative)
import createStyles from './styles';
import type { ${screenName}Props } from './types';

const ${screenName} = ({ navigation, route }: ${screenName}Props) => {
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  return (
    <SafeAreaView style={styles.container}>
      <${componentName} navigation={navigation} route={route} />
    </SafeAreaView>
  );
};

export default ${screenName};\n`;
};

const splashScreenTemplate = `// React & React Native
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

// Third-Party Libraries
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

// Sibling Directory Imports (Relative)
import createStyles from './styles';
import type { SplashScreenProps } from './types';

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const { t } = useTranslation('global');

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('TabNavigator', { screen: 'HomeScreen' });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('welcome')}</Text>
    </View>
  );
};

export default SplashScreen;
`;

const tabComponentsToCreate = [
  {
    path: 'src/i18n/locales/en/global.ts',
    content: `export default {
  welcome: 'Welcome to the starter template',
  errorBoundary: 'Something went wrong',
};
`,
  },
  {
    path: 'src/i18n/locales/tr/global.ts',
    content: `export default {
  welcome: 'Başlangıç şablonuna hoş geldiniz',
  errorBoundary: 'Bir şeyler yanlış gitti',
};
`,
  },
  {
    path: 'src/i18n/locales/en/translations.ts',
    content: i18nTranslationsTemplate,
  },
  {
    path: 'src/i18n/locales/tr/translations.ts',
    content: i18nTranslationsTemplate,
  },
  {
    path: 'src/components/tab/home/content/HomeContent.tsx',
    content: basicComponentTemplate('HomeContent', 'HomeScreen'),
  },
  {
    path: 'src/components/tab/home/content/styles.ts',
    content: basicStylesTemplate(true),
  },
  {
    path: 'src/components/tab/home/content/types.ts',
    content: basicTypesTemplate('HomeContent', 'HomeScreen', 'TabStack'),
  },
  {
    path: 'src/components/tab/profile/content/ProfileContent.tsx',
    content: basicComponentTemplate('ProfileContent', 'ProfileScreen'),
  },
  {
    path: 'src/components/tab/profile/content/styles.ts',
    content: basicStylesTemplate(true),
  },
  {
    path: 'src/components/tab/profile/content/types.ts',
    content: basicTypesTemplate('ProfileContent', 'ProfileScreen', 'TabStack'),
  },
  {
    path: 'src/screens/tab/home/HomeScreen.tsx',
    content: basicScreenTemplate('home', 'HomeContent', 'HomeScreen'),
  },
  {
    path: 'src/screens/tab/home/styles.ts',
    content: basicStylesTemplate(false),
  },
  {
    path: 'src/screens/tab/home/types.ts',
    content: basicTypesTemplate('HomeScreen', 'HomeScreen', 'TabStack'),
  },
  {
    path: 'src/screens/tab/profile/ProfileScreen.tsx',
    content: basicScreenTemplate('profile', 'ProfileContent', 'ProfileScreen'),
  },
  {
    path: 'src/screens/tab/profile/styles.ts',
    content: basicStylesTemplate(false),
  },
  {
    path: 'src/screens/tab/profile/types.ts',
    content: basicTypesTemplate('ProfileScreen', 'ProfileScreen', 'TabStack'),
  },
  {
    path: 'src/screens/splash/SplashScreen.tsx',
    content: splashScreenTemplate,
  },
  {
    path: 'src/screens/splash/styles.ts',
    content: basicStylesTemplate(true),
  },
  {
    path: 'src/screens/splash/types.ts',
    content: basicTypesTemplate('SplashScreen', 'SplashScreen', 'SplashStack'),
  },
];

const processFileWithMultiplePatterns = (filePath, patternConfigList) => {
  const fullPath = path.resolve(process.cwd(), filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(
      `\x1b[33m⚠️ The file to be changed not found: ${filePath}\x1b[0m`,
    );
    return;
  }

  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;

    for (const patternConfig of patternConfigList) {
      const newContent = content.replace(
        patternConfig.pattern,
        patternConfig.replacement,
      );
      if (newContent !== content) {
        content = newContent;
        modified = true;
        console.log(`\x1b[32m✅ Pattern applied: ${patternConfig.path}\x1b[0m`);
      } else {
        console.log(
          `\x1b[33m⚠️ Pattern could not be applied: ${patternConfig.path}\x1b[0m`,
        );
      }
    }

    if (modified) {
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`\x1b[32m✅ The file has been changed: ${filePath}\x1b[0m`);
    } else {
      console.log(
        `\x1b[33m⚠️ File change could not be applied: ${filePath}\x1b[0m`,
      );
    }
  } catch (error) {
    console.error(
      `\x1b[31m❌ File Replacement Error ${filePath}: ${error.message}\x1b[0m`,
    );
  }
};

const processDirectory = (itemPath, shouldDelete) => {
  const fullPath = path.resolve(process.cwd(), itemPath);

  if (!fs.existsSync(fullPath)) {
    console.log(`\x1b[33m⚠️ Not found: ${itemPath}\x1b[0m`);
    return;
  }

  const stats = fs.statSync(fullPath);
  if (stats.isDirectory()) {
    const filesInDir = fs.readdirSync(fullPath);

    for (const file of filesInDir) {
      const filePath = path.join(fullPath, file);
      processDirectory(filePath, shouldDelete);
    }

    if (shouldDelete) {
      fs.rmdirSync(fullPath);
      console.log(`\x1b[32m✅ The folder was deleted: ${itemPath}\x1b[0m`);
    } else {
      fs.writeFileSync(path.join(fullPath, '.gitkeep'), '', 'utf8');
      console.log(
        `\x1b[32m✅ The folder content was cleaned: ${itemPath}\x1b[0m`,
      );
    }
  } else {
    fs.unlinkSync(fullPath);
    console.log(`\x1b[32m✅ File deleted: ${itemPath}\x1b[0m`);
  }
};

const createTabComponent = componentConfig => {
  const fullPath = path.resolve(process.cwd(), componentConfig.path);
  const dirPath = path.dirname(fullPath);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  fs.writeFileSync(fullPath, componentConfig.content, 'utf8');
  console.log(`\x1b[32m✅ File Created: ${componentConfig.path}\x1b[0m`);
};

for (const item of directoriesToDelete) {
  processDirectory(item, true);
}

for (const item of directoriesToClean) {
  processDirectory(item, false);
}

const fileGroups = {};
for (const fileConfig of filesToModify) {
  if (!fileGroups[fileConfig.path]) {
    fileGroups[fileConfig.path] = [];
  }
  fileGroups[fileConfig.path].push(fileConfig);
}

for (const filePath in fileGroups) {
  processFileWithMultiplePatterns(filePath, fileGroups[filePath]);
}

for (const componentConfig of tabComponentsToCreate) {
  createTabComponent(componentConfig);
}

console.log('\x1b[36m%s\x1b[0m', '✨ Cleaning process is completed!');
