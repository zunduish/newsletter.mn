import { ErxesImageUrl } from "@/utils";
import React from "react";
import Loader from "./Loader";
import UploadHandler from "./uploadHandler";
import Image from "next/image";

type Props = {
  defaultFileList: any;
  onChange: (attachments: any) => void;
  single?: boolean;
  limit?: number;
  multiple?: boolean;
};

type State = {
  attachments: any;
  loading: boolean;
};

class Uploader extends React.Component<Props, State> {
  static defaultProps = {
    multiple: true,
    limit: 4,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      attachments: props.defaultFileList || [],
      loading: false,
    };
  }

  handleFileInput = ({ target }: any) => {
    const files = target.files;

    UploadHandler({
      files,
      beforeUpload: () => {
        this.setState({
          loading: true,
        });
      },
      afterUpload: ({ status, response, fileInfo }) => {
        if (status !== "ok") {
          alert(response);
          return this.setState({ loading: false });
        }
        const attachment = { url: response, ...fileInfo };
        const attachments = [attachment, ...this.state.attachments];
        this.props.onChange(attachments);
        this.setState({
          loading: false,
          attachments,
        });
      },
    });
    target.value = "";
  };

  removeAttachment = (index: number) => {
    const attachments = [...this.state.attachments];
    attachments.splice(index, 1);
    this.setState({ attachments });
    this.props.onChange(attachments);
  };
  renderUploadButton() {
    const { multiple, single } = this.props;
    if (single && this.state.attachments.length > 0) {
      return null;
    }
    return (
      <div>
        <label className="upload-btn" htmlFor="uploader">
          <div>
            <Image
              src="/icons/image-upload.png"
              width={100}
              height={100}
              alt=""
            />
            Зураг оруулах
          </div>
        </label>
        <input
          name="file"
          id="uploader"
          hidden
          type="file"
          multiple={multiple}
          onChange={this.handleFileInput}
        />
      </div>
    );
  }

  render() {
    const { limit = 4, onChange } = this.props;
    const { attachments, loading } = this.state;
    return (
      <>
        <div className="ad-images-wrapper flex">
          {this.renderUploadButton()}
          {loading && (
            <div>
              <Loader />
            </div>
          )}

          {attachments.length > 0 &&
            attachments.map((attachment: any, index: number) => (
              <div className="image" key={index}>
                <Image
                  src={ErxesImageUrl + attachment.url}
                  width={100}
                  height={100}
                  alt=""
                />
                <div
                  className="remove"
                  onClick={() => this.removeAttachment(index)}
                >
                  <i className="fa fa-times" />
                </div>
              </div>
            ))}
        </div>
      </>
    );
  }
}

export default Uploader;
