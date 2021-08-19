export interface State {
    recordingSeconds: number;
    recordingMinutes: number;
    startedRecording: boolean;
    mediaStream: MediaStream | null;
    mediaRecorder: MediaRecorder | null;
    audio: any;
}
