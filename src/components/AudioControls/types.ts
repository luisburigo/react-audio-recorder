export interface Props {
    minutes: number;
    seconds: number;
    starded: boolean;
    startRecording: () => void;
    saveRecording: () => void;
    cancelRecording: () => void;
}
