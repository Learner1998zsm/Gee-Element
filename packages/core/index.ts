import { createInstaller } from '@gee-element/utils';
import components from './components';
import '@gee-element/theme';

const installer = createInstaller(components);

export * from '@gee-element/components';
export default installer;
