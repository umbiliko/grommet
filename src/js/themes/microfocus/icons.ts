import { deepMerge } from 'hercules-theme/utils';
import iconAppOperationsManagerWindows24 from '../quantum-ux/icon-app-operations-manager-windows24';
import iconUrl from '../quantum-ux/icon-url';

const otherIcons = {
  iconAppOperationsManagerWindows24,
};

const SIZE = {
  16: 'small',
  24: 'medium',
  32: 'large',
};

const icons = {
  Collapse: {
    small: iconUrl.collapse16,
    medium: iconUrl.collapse24,
  },
  Expand: {
    small: iconUrl.expand16,
    medium: iconUrl.expand24,
  },
  Error: {
    medium: iconUrl.error24,
  },
  Info: {
    small: iconUrl.info16,
    medium: iconUrl.info24,
  },
  Normal: {
    medium: iconUrl.normal24,
  },
  Warning: {
    medium: iconUrl.warning24,
  },
  SeverityCritical: {
    small: iconUrl.severityCritical16,
  },
  SeverityMajor: {
    small: iconUrl.severityMajor16,
  },
  SeverityMinor: {
    small: iconUrl.severityMinor16,
  },
  SeverityNormal: {
    small: iconUrl.severityNormal16,
  },
  SeverityUnknown: {
    small: iconUrl.severityUnknown16,
  },
  SeverityWarning: {
    small: iconUrl.severityWarning16,
  },
  ...Object.entries(otherIcons).reduce((acc, [key, val]) => {
    if (typeof val !== 'string') {
      return acc;
    }
    const match = key.match(/^icon(.*)(16|24|32)$/);
    if (!match) {
      return acc;
    }
    const [, name, size] = match;
    return deepMerge(acc, { [name]: { [SIZE[size]]: val } });
  }, {}),
};

export default icons;
