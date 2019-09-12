import React from 'react';

const FileUpload = ({ setAudioSource }) => {
    const uploadAudioFile = e => {
        setAudioSource(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <input type="file" onChange={uploadAudioFile} />
    );
}

export default FileUpload;