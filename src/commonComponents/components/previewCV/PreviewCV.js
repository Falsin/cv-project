import React from 'react';
import OutputPersonalInfo from './personalInfoBlock/OutputPersonalInfo';
import CloneObj from '../../additionalComponents/CloneObj';
import CommonInformation from './commonInformation/CommonInformationComp';

class PreviewCV extends React.Component {
  constructor(props) {
    super(props)

    this.CommonParentScope = props.parentScope;
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState === this.state) {
      this.setState(CloneObj(this.CommonParentScope.state));
    }
  }

  render() {
    return (
      <section id='previewCV'>
        <div>
        {this.state && <CommonInformation obj={this.state}/>}

        {this.state && <OutputPersonalInfo parentState={this.state} />}
        </div>

        <button onClick={() => {
          /* let printContents = document.getElementById("previewCV").innerHTML;
          let originalContents = document.body.innerHTML;
          document.body.innerHTML = printContents;
          window.print();
          document.body.innerHTML = originalContents; */

         /*  const content = document.getElementById('previewCV');
          let pri = document.getElementById("ifmcontentstoprint").contentWindow;
          pri.document.open();
          pri.document.write(content.innerHTML);
          pri.document.close();
          pri.focus();
          pri.print(); */

          /* let printContents = document.getElementById("templateCV");
          printContents.style.display = 'none'; */
          window.print()
        }}>Print</button>
      </section>
    )
  }
}

export default PreviewCV