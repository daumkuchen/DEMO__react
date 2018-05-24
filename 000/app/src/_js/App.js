/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
　　IMPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

// core
import React from 'react';

// css
// import '../_css/layout/_intro.css';

// js
import platform from 'platform';

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
　　RENDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const osVersion = platform.os.version;
    const osVersionSplit = osVersion.split('.');

    const returnModules01 = <div className="l-modules__01">
      <h1>✕：PCからアクセス時のページを表示</h1>
      <p>✕ PCでアクセス</p>
    </div>;

    const returnModules02 = <div className="l-modules__02">
      <h1>✕：非対応ページ［OS、ブラウザ］を表示</h1>
      <p>◯ SPでアクセス</p>
      <p>✕ 非対応OS（iOS 11以下、androidOS 5.1以下）</p>
      <p>もしくは、</p>
      <p>✕ 非対応ブラウザ（iOSの場合Safali以外、androidOSの場合Chrome以外）</p>
    </div>;

    const returnModules03 = <div className="l-modules__03">
      <h1>◯：正しいページを表示</h1>
      <p>◯ SPでアクセス</p>
      <p>◯ 対応OS（iOS 11以上、androidOS 5.1以上）</p>
      <p>かつ、</p>
      <p>◯ 対応ブラウザ（iOSの場合Safali、androidOSの場合Chrome）</p>
    </div>;

    // android標準ブラウザ
    if ((/Android/.test(window.navigator.userAgent) && /Linux; U;/.test(window.navigator.userAgent) && !/Chrome/.test(window.navigator.userAgent)) || (/Android/.test(window.navigator.userAgent) && /Chrome/.test(window.navigator.userAgent) && /Version/.test(window.navigator.userAgent))) {

      // 非対応ページ［OS、ブラウザ］
      return returnModules02;

    } else {

      // iOS
      if (platform.os.family === 'iOS') {

        if (osVersionSplit[0] >= 11) {
          if (platform.name === 'Safari') {
            // 正しいページ
            return returnModules03;
          } else {
            // 非対応ページ［OS、ブラウザ］
            return returnModules02;
          }
        } else {
          // 非対応ページ［OS、ブラウザ］
          return returnModules02;
        }

      // androidOS
      } else if (platform.os.family === 'Android') {

        if (osVersionSplit[0] >= 5) {
          if (platform.name === 'Chrome Mobile') {
            // 正しいページ
            return returnModules03;
          } else {
            // 非対応ページ［OS、ブラウザ］
            return returnModules02;
          }
        } else if (osVersionSplit[0] === 5) {
          if (osVersionSplit[1] >= 1) {
            if (platform.name === 'Chrome Mobile') {
              // 正しいページ
              return returnModules03;
            } else {
              // 非対応ページ［OS、ブラウザ］
              return returnModules02;
            }
          } else {
            // 非対応ページ［OS、ブラウザ］
            return returnModules02;
          }
        } else {
          // 非対応ページ［OS、ブラウザ］
          return returnModules02;
        }

      } else {

        // PCからアクセス時のページ
        return returnModules01;

      }
    }

  }
}

export default App;
