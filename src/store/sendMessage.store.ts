import { create, useStore } from 'zustand'
import { immer } from 'zustand/middleware/immer';
import { sendMessageService } from '../service/message.service';
import useMessageStore from './message.store';

interface IHandleTextInput {
  message : string;
  handleTextInput : (val : any) => void;
  sendMessage: () => Promise<void>
}
const useHandleTextInput = create<IHandleTextInput>()(
    immer( (set, get) => ({
        message: '',
        handleTextInput: (val) => {
            set({message: val})
        },
        sendMessage:  async () => {
            
        },
    }) )
)



export default useHandleTextInput