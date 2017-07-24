import React     from 'react'
import InlineCss from 'react-inline-css'

const
  stylesheet = require('!css!less!./titlebar.less').toString()
, TitleBar   = React.createClass({
  render() {
    const icon = this.props.isSetting ? '' :
      <img src='images/settings-icon.png' style={{width : '22px'}} />
    const handleClick = this.props.isSetting ? this.props.hideSettings : this.props.showSettings
    return (
      <InlineCss componentName="TitleBar" stylesheet={stylesheet}>
        <div className="header-bar">
          <span>{this.props.pad}</span>
          <div onClick={handleClick} className="setting-icon">
            {icon}
          </div>
        </div>
      </InlineCss>
    )
  }
})

export default TitleBar