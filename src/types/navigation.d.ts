// Types
import {RootStack} from 'navigation/types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStack {}
  }
}
