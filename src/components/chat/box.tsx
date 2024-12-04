'use client';

import React, { useCallback } from 'react';
import { Tooltip } from 'react-tooltip'
import { useChatDispatch } from '@/contexts/chat.context';

const ChatBox = () => {
  const dispatch = useChatDispatch();

  const handleClose = useCallback(() => {
    dispatch({ type: 'STATE_CHAT', payload: false });
  }, [dispatch]);

  return (
    <div className="absolute rounded-b-3xl h-[650px] w-[370px] overflow-hidden bottom-20 right-0" style={{
      maxHeight: 'calc(100% - 47px)', display: 'flex', flexDirection: 'column'
    }}>
      <div style={{flex: '1 1 0'}}>
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-16 w-full fill-theme-400" viewBox="0 0 1440 320">
          <path fillOpacity="1" d="M0,160L80,133.3C160,107,320,53,480,64C640,75,800,149,960,165.3C1120,181,1280,139,1360,117.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
        <div className="flex justify-between bg-theme-400 h-16 rounded-t-3xl px-4 py-4">
          <p className="font-NexaHeavy text-2xl ml-2 select-none">Bonjour !
            <span className="inline-flex ml-2 relative top-1">
              <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.1/72x72/1f44b.png" width={24} height={24} alt="👋" className="emoji"/>
            </span>
          </p>
          <div className="flex gap-1 items-center mt-2">
            <button data-tooltip-id="chat-options"
                    data-tooltip-content="Options"
                    data-tooltip-place="bottom"
                    className="text-white h-10 w-10 rounded-full justify-center items-center hover:bg-theme-600 inline-flex transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height={28} width={28} viewBox="0 0 24 24">
                <path xmlns="http://www.w3.org/2000/svg" d="M10,6a2,2,0,1,1,2,2A2,2,0,0,1,10,6Zm2,4a2,2,0,1,0,2,2A2,2,0,0,0,12,10Zm0,6a2,2,0,1,0,2,2A2,2,0,0,0,12,16Z"/>
              </svg>
            </button>
            <button onClick={() => handleClose()}
                    data-tooltip-id="chat-close"
                    data-tooltip-content="Minimiser"
                    data-tooltip-place="bottom-end"
                    className="text-white h-10 w-10 rounded-full justify-center items-center hover:bg-theme-600 inline-flex transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height={32} width={32} viewBox="0 0 24 24">
                <path d="M5.5,13a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h13a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5Z"/>
              </svg>
            </button>
            <Tooltip id="chat-close" offset={12} style={{
              background: 'rgba(var(--theme-600))', borderRadius: 10, fontFamily: 'var(--nexa-heavy)'
            }}/>
            <Tooltip id="chat-options" offset={12} style={{
              background: 'rgba(var(--theme-600))', borderRadius: 10, fontFamily: 'var(--nexa-heavy)'
            }}/>
          </div>
        </div>
        <div className="h-full bg-theme-50">

        </div>
      </div>
    </div>
  );
}

export default ChatBox;
