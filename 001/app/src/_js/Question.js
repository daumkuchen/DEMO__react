/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
　　IMPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

// core
import React from 'react';

// css
import '../_css/layout/question.css';

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
　　RENDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

class Question extends React.Component {

  decisionArray = [];
  index = null;
  list = null;
  listChild = null;

  constructor(props) {
    super(props);
    this.state = {
    };
    this.init();
  }

  componentDidMount() {
    this.index = 0;
    this.list = document.querySelectorAll('.l-question__list');
    this.listChild = document.querySelectorAll('.l-question__list li');
    for (var i = 0; i < this.list.length; i++) {
      if (i !== 0) {
        this.list[i].style.display = 'none';
      }
    }
  }

  init() {
  }

  onClick(e) {

    this.list[this.index].classList.add('is-end');

    if (this.index !== 4) {
      let targetIndex = [].slice.call(this.listChild).indexOf(e.currentTarget);
      this.decisionArray.push(targetIndex);

      this.list[this.index].style.display = 'none';
      this.list[this.index + 1].style.display = 'block';
      this.index++;

      console.log(this.decisionArray);
      console.log(this.index)

    } else {
      console.log('end');
    }
  }

  render() {

    const modulesQuestion = (
      <div className="l-question">
        <h1 className="l-question__ttl">QUESTION</h1>
        {/* 01 */}
        <ul className="l-question__list">
          <li onClick={(e) => this.onClick(e)}>1.foo</li>
          <li onClick={(e) => this.onClick(e)}>1.bar</li>
          <li onClick={(e) => this.onClick(e)}>1.baz</li>
        </ul>
        {/* 02 */}
        <ul className="l-question__list">
          <li onClick={(e) => this.onClick(e)}>2.foo</li>
          <li onClick={(e) => this.onClick(e)}>2.bar</li>
          <li onClick={(e) => this.onClick(e)}>2.baz</li>
        </ul>
        {/* 03 */}
        <ul className="l-question__list">
          <li onClick={(e) => this.onClick(e)}>3.foo</li>
          <li onClick={(e) => this.onClick(e)}>3.bar</li>
          <li onClick={(e) => this.onClick(e)}>3.baz</li>
        </ul>
        {/* 04 */}
        <ul className="l-question__list">
          <li onClick={(e) => this.onClick(e)}>4.foo</li>
          <li onClick={(e) => this.onClick(e)}>4.bar</li>
          <li onClick={(e) => this.onClick(e)}>4.baz</li>
        </ul>
        {/* 05 */}
        <ul className="l-question__list">
          <li onClick={(e) => this.onClick(e)}>5.foo</li>
          <li onClick={(e) => this.onClick(e)}>5.bar</li>
          <li onClick={(e) => this.onClick(e)}>5.baz</li>
        </ul>
      </div>
    );

    return modulesQuestion;
  }

}

export default Question;
