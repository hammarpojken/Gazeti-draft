import React from 'react'


class SimpleReactFileUpload extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      data: null,
      fullscreen: false,
      loading: false
    };
    
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handlePreviewClick = this.handlePreviewClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  handleFileChange(event) {
    const {target} = event;
    const {files} = target;

    if (files && files[0]) {
      var reader = new FileReader();
      
      reader.onloadstart = () => this.setState({loading: true});

      reader.onload = event => {
        this.setState({
          data: event.target.result,
          loading: false
        });
      };
   
      reader.readAsDataURL(files[0]);
    }
  }
  
  handleClearClick() {
    this.setState({
      data: null,
      fullScreen: false
    });
  }
  
  handlePreviewClick() {
    const {data, fullScreen} = this.state;
 
    if (!data) {
      return;
    }
    
    this.setState({fullScreen: !fullScreen});
  }

  render() {
    const {data, fullScreen, loading} = this.state;
    const imgData = 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'
    const backgroundImage = data ? {backgroundImage: `url(${imgData})`} : null;
    const previewClasses = ['preview', fullScreen ? 'preview--fullscreen' : ''].join(' ');
          

    return (
      <div>

        <input
          id="car"
          type="file"
          accept="image/*"
          capture="camera"
          onChange={this.handleFileChange}
        />

        <div
          className={previewClasses}
          style={backgroundImage}
          onClick={this.handlePreviewClick}
        >
          {!data && !loading &&
            <label htmlFor="car">
              Click to capture
            </label>
          }

          {loading &&
            <span>Loading...</span>
          }
        </div>
        
        <button type='button' onClick={this.handleClearClick}>
          Clear Image
        </button>

      </div>
    );
  }
}
export default SimpleReactFileUpload
