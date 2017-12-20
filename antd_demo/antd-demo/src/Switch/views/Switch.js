import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'antd';
import { injectIntl, FormattedMessage } from 'react-intl'
import { changelocale } from '../actions.js';
import en_US from '../../Locales/en-US.js';
import zh_CN from '../../Locales/zh-CN.js';

const SwitchLang = ({onToggleLocale}) => {
    return (
        <Switch
            className="switch"
            checkedChildren={<FormattedMessage id="switch.en" defaultMessage="EN" />}
            unCheckedChildren={<FormattedMessage id="switch.zh" defaultMessage="ZH" />}
            defaultChecked={true} onChange={onToggleLocale}
        />
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggleLocale:
            (checked) => {
                const locale = checked ? 'en-US' : 'zh-CN';
                const messages = checked ? en_US.messages : zh_CN.messages;
                return dispatch(changelocale(locale, messages));
            }
    };
};
export default injectIntl(connect(null, mapDispatchToProps)(SwitchLang));
