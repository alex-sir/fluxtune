import React from 'react';
import './FileUpload.css';

const FileUpload = ({ isPlaying, setPlayPauseStatus, setAudioSource, setAudioName }) => {
    const uploadAudioFile = e => {
        if (!e.target.value) {
            return;
        }

        const filename = e.target.files[0].name;
        const cutFilename = filename.substr(0, filename.lastIndexOf('.')) || filename;

        setAudioName(cutFilename);
        setAudioSource(URL.createObjectURL(e.target.files[0]));

        if (isPlaying) {
            setPlayPauseStatus();
        }
    }

    return (
        <div>
            <label id="audio-upload-label" htmlFor="audio-upload">Choose Audio</label>
            <input
                id="audio-upload"
                type="file"
                size="60"
                onChange={uploadAudioFile}
            />
        </div>
    );
}

export default FileUpload;