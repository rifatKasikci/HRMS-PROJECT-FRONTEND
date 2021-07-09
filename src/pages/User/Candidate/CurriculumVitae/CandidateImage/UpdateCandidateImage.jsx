import React,{Component} from 'react'
import { Card , Input , Button } from 'semantic-ui-react'
import CandidateImageService from '../../../../../services/candidateImageService'

export default class UpdateImage extends Component {
    state = {
      selectedFile: null,
    };
  
    fileSelectedHandler = (event) => {
      this.setState({
        selectedFile: event.target.files[0],
      });
    };
  
    fileUploadHandler = () => {
      const formData = new FormData()
      formData.append(
        "file",
        this.state.selectedFile,
        this.state.selectedFile.name
      )

      let candidateImageService = new CandidateImageService();
      candidateImageService.uploadImage(this.props.candidateId, formData).then((response) => {console.log(response)})
    };
  
    render() {
      return (
        <div>
          <Card fluid >
            <Card.Content header="Resim Yükle" />
            <Card.Content style={{}}>
              <input
                style={{ display: "none" }}
                type="file"
                onChange={this.fileSelectedHandler}
                ref={(fileInput) => (this.fileInput = fileInput)}
              />
              <Button className="ui button" onClick={() => this.fileInput.click()}>Select File</Button>
              <Button color={"green"} onClick={this.fileUploadHandler} disabled={this.state.selectedFile==null}>Upload</Button>
            </Card.Content>
          </Card>
        </div>
      );
    }
  }