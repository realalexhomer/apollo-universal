import React from 'react';

import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import VideoUploadView from '../components/VideoUploadView';

interface VideoUploadProps {
  t: TranslateFunction;
}

class VideoUpload extends React.Component<VideoUploadProps> {
  public render() {
    return <VideoUploadView {...this.props} />;
  }
}

export default translate('video-upload')(VideoUpload);
