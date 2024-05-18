const interfaceConst = 'interface';

module.exports = (componentName) => `import { memo } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './Dropdown.module.scss';

const cx = classNames.bind(styles);

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = memo(({ className }: ${componentName}Props) => {
    const { t } = useTranslation();

    return (
        <div className={cx(styles.container, className)}>
           some text
        </div>
    );
});`;
