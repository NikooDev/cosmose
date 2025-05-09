'use client';

import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { DateTime } from 'luxon';
import { Tooltip } from 'react-tooltip'
import { useChatDispatch } from '@/contexts/chat.context';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuItem, useClick, ControlledMenu, useMenuState } from '@szhsin/react-menu';
import { toRelativeDate } from '@/utils/functions';
import useChat from '@/hooks/useChat';
import Button from '@/components/ui/button';
import Link from 'next/link';
import Class from 'classnames';
import Loader from '@/components/ui/loader';

const ChatBox = ({
  handleMouseEnter,
  handleMouseLeave,
  chatBoxRef
}: { handleMouseEnter?: () => void, handleMouseLeave?: () => void, chatBoxRef: RefObject<HTMLDivElement> }) => {
  const [rows, setRows] = useState(1);
  const [email, setEmail] = useState<string | null>(null);
  const [tooltipOptions, setTooltipOptions] = useState(false);
  const [menuState, toggleMenu] = useMenuState({ transition: true });
  const anchorProps = useClick(menuState.state, toggleMenu);
  const { isRegistered, messages, message, errorEmail, loading, loadingRecover, popRef, soundOff, conversationUID,
    setMessage, handleSound, handleRecover, handleLogin, handleMessage, handleLogout, setErrorEmail, setIsRegistered, setLoadingRecover
  } = useChat();
  const emailRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const optionsRef = useRef(null);
  const dispatch = useChatDispatch();

  const handleClose = useCallback(() => {
    dispatch({ type: 'STATE_CHAT', payload: false });
  }, [dispatch]);

  useEffect(() => {
    if (!isRegistered && emailRef.current) {
      setTimeout(() => emailRef.current && emailRef.current.focus(), 500);
    }
  }, [isRegistered, emailRef]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;

    setEmail(emailValue);
    setErrorEmail(false);
  }

  useEffect(() => {
    if (!email) {
      setErrorEmail(false);
    }
  }, [email])

  const recoverLogin = useCallback(() => {
    const session = localStorage.getItem('session');

    if (session) {
      handleRecover(session).then();
    } else {
      setIsRegistered(false);
      setLoadingRecover(false);
    }
  }, []);

  useEffect(() => recoverLogin(), [recoverLogin]);

  const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const textarea = event.target as HTMLTextAreaElement;
    const lineBreaks = textarea.value.split('\n').length;
    const maxCharsPerLine = Math.floor(textarea.offsetWidth / 10);
    const wrappedLines = Math.ceil(textarea.value.length / maxCharsPerLine);
    const newRows = Math.min(3, Math.max(lineBreaks, wrappedLines));

    setRows(newRows);
    setMessage(textarea.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>) => {
    event.preventDefault();

    if (!message || !conversationUID || message && message.trim().length === 0) return;

    setMessage('');
    setRows(1);

    const serializeMessage = message.replace(/\n+/g, '\n').trim();

    await handleMessage(serializeMessage, true, conversationUID);

    textareaRef.current && textareaRef.current.focus();
  }

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      await handleSubmit(event);
    }
  };

  return (
    <div ref={chatBoxRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="absolute rounded-b-3xl h-[650px] md:w-[370px] w-full overflow-hidden bottom-[7.5rem] right-0" style={{
      maxHeight: 'calc(100% - 47px)', display: 'flex', flexDirection: 'column'
    }}>
      <div className="bg-theme-400 rounded-t-3xl" style={{
        flex: '1 1 0', minHeight: 0, display: 'flex', flexDirection: 'column', inset: 0
      }}>
        <div className="flex justify-between h-16 w-full px-4 py-4 relative">
          <p className="font-NexaHeavy text-2xl ml-2 select-none">Bonjour !
            <span className="inline-flex ml-2 relative top-1">
              <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.1/72x72/1f44b.png" width={24} height={24} alt="👋" className="emoji"/>
            </span>
          </p>
          <div className="flex gap-1 items-center mt-2">
            {
              isRegistered && (
                <>
                  <button {...anchorProps}
                          ref={optionsRef}
                          data-tooltip-id="chat-options"
                          data-tooltip-content="Options"
                          data-tooltip-place="bottom"
                          onMouseEnter={() => (menuState.state === 'closed' || !menuState.state) ? setTooltipOptions(true) : setTooltipOptions(false)}
                          onMouseLeave={() => setTooltipOptions(false)}
                          onClickCapture={() => setTooltipOptions(false)}
                          className={Class('text-white h-10 w-10 rounded-full justify-center items-center hover:bg-theme-600 inline-flex transition-colors duration-200', menuState.state === 'open' && 'bg-theme-600')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height={28} width={28} viewBox="0 0 24 24">
                      <path xmlns="http://www.w3.org/2000/svg" d="M10,6a2,2,0,1,1,2,2A2,2,0,0,1,10,6Zm2,4a2,2,0,1,0,2,2A2,2,0,0,0,12,10Zm0,6a2,2,0,1,0,2,2A2,2,0,0,0,12,16Z"/>
                    </svg>
                  </button>
                  <ControlledMenu {...menuState} anchorRef={optionsRef} onClose={() => toggleMenu(false)}
                                  arrow align="end" gap={2} direction="bottom" className="rounded-2xl" transition>
                    <MenuItem onClick={handleSound} className="font-bold">
                      <span className="mr-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height={22} width={22} viewBox="0 0 24 24">
                          {
                            !soundOff ? (
                              <path xmlns="http://www.w3.org/2000/svg" d="M13,5V19a1,1,0,0,1-1,1h-.59a1,1,0,0,1-.7-.29L6.88,15.88A3,3,0,0,0,4.76,15h0A1.76,1.76,0,0,1,3,13.24V10.76A1.76,1.76,0,0,1,4.76,9a3,3,0,0,0,2.12-.88l3.83-3.83a1,1,0,0,1,.7-.29H12A1,1,0,0,1,13,5Zm6,1.73a.58.58,0,0,0-.36-.17.5.5,0,0,0-.37.15l-.71.71a.5.5,0,0,0,0,.68,6,6,0,0,1,0,7.8.5.5,0,0,0,0,.68l.71.71a.5.5,0,0,0,.37.15.56.56,0,0,0,.36-.17A8,8,0,0,0,19,6.73ZM15.84,9.4a.53.53,0,0,0-.39.15l-.71.72a.5.5,0,0,0-.07.63,2,2,0,0,1,0,2.2.5.5,0,0,0,.07.63l.71.72a.52.52,0,0,0,.39.14.52.52,0,0,0,.37-.19,4,4,0,0,0,0-4.8A.57.57,0,0,0,15.84,9.4Z"/>
                            ) : (
                              <path d="M19.85,19.32l-.53.53a.48.48,0,0,1-.7,0L15,16.24V19a1,1,0,0,1-1,1h-.59a1,1,0,0,1-.7-.29L8.88,15.88A3,3,0,0,0,6.76,15h0A1.76,1.76,0,0,1,5,13.24V10.76A1.76,1.76,0,0,1,6.76,9h0a3.16,3.16,0,0,0,.86-.14L4.15,5.38a.48.48,0,0,1,0-.7l.53-.53a.48.48,0,0,1,.7,0L19.85,18.62A.48.48,0,0,1,19.85,19.32ZM15,5a1,1,0,0,0-1-1h-.59a1,1,0,0,0-.7.29L10.36,6.64,15,11.29Z"/>
                            )
                          }
                        </svg>
                      </span>
                      <span>{soundOff ? 'Désactiver le son' : 'Activer le son'}</span>
                    </MenuItem>
                    <MenuItem onClick={handleLogout} className="font-bold">
                      <span className="mr-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height={22} width={22} viewBox="0 0 24 24">
                          <path xmlns="http://www.w3.org/2000/svg" d="M11,13.5V3.5a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,.5.5v10a.5.5,0,0,1-.5.5h-1A.5.5,0,0,1,11,13.5Zm7-5.77a.53.53,0,0,0-.36-.17.51.51,0,0,0-.37.15l-.71.71a.51.51,0,0,0,0,.68A5.92,5.92,0,0,1,18,13,6,6,0,0,1,6,13,5.92,5.92,0,0,1,7.45,9.1a.51.51,0,0,0,0-.68l-.71-.71a.51.51,0,0,0-.37-.15A.53.53,0,0,0,6,7.73a8,8,0,1,0,12,0Z"/>
                        </svg>
                      </span>
                      <span>Quitter la session</span>
                    </MenuItem>
                  </ControlledMenu>
                </>
              )}
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
            <Tooltip id="chat-options" isOpen={tooltipOptions} offset={12} style={{
              background: 'rgba(var(--theme-600))', borderRadius: 10, fontFamily: 'var(--nexa-heavy)'
            }}/>
          </div>
        </div>
        <div className="px-6 pb-4 border-b-2 border-white select-none">
          <p className="font-NexaHeavy">Des questions ? Discutons !</p>
          <p className="font-bold text-sm">Nos conseillers sont disponibles pour vous renseigner.</p>
        </div>
        {loadingRecover ? (
          <div className="bg-theme-50 flex px-4 justify-center items-center w-full h-full max-h-full" style={{flex: '0 1 auto'}}>
            <Loader className="bg-white shadow-md theme" height={50} width={50}/>
          </div>
        ) : (
          <>
            <div className={Class('bg-theme-50 flex px-4 relative', !isRegistered ? 'justify-center items-center' : 'flex-col-reverse pt-4 pb-4')} style={{
              height: !isRegistered ? '100%' : '30rem',
              width: '100%',
              overflow: 'hidden auto',
              maxHeight: !isRegistered ? '100%' : '30rem',
              minHeight: '160px',
              flex: '0 1 auto',
              scrollbarColor: 'rgb(176 171 202) rgba(0, 0, 0, 0)',
              scrollbarWidth: 'thin'
            }}>
              <AnimatePresence>
                {!isRegistered ? (
                  <form method="post" onSubmit={(event) => handleLogin(event, email ? email.toLowerCase() : null)} className="flex flex-col w-full px-4 py-2">
                    <p className="text-theme-800 text-center font-NexaHeavy mb-3">
                      Pour commencer à discuter, renseignez votre adresse e-mail.
                    </p>
                    <input type="text" autoFocus name="email" ref={emailRef} onChange={handleChange} placeholder="Adresse e-mail" className={Class('bg-white shadow-md rounded-3xl w-full h-10 px-4 font-bold text-slate-800 border-2 transition-all duration-200', errorEmail ? 'border-red-500' : 'border-white')}/>
                    <p className="text-sm text-center font-bold text-theme-800 my-4">En cliquant
                      sur <span className="font-NexaHeavy">Connexion</span>, vous acceptez
                      notre <Link href="/confidentialite" className="underline">Politique de confidentialité</Link>.
                    </p>
                    <div className="flex gap-2 self-end items-center">
                      <Button type="submit" disabled={loading || (
                        emailRef.current ? emailRef.current.value.trim().length === 0 || emailRef.current.value.length === 0 : true
                      )} className={Class('px-4 h-9 mt-0 shadow disabled:bg-theme-200 hover:disabled:text-theme-50 hover:bg-white hover:shadow-md transition-all duration-300', loading && 'px-0')}>
                        {loading ? (
                          <Loader className="border-none bg-transparent" height={17} width={17}/>
                        ) : 'Connexion'}
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="flex flex-col w-full">
                    {messages.map((message, index) => (
                      <motion.div key={index} className={Class('flex flex-col', (
                        index !== messages.length - 1
                      ) && 'mb-3', message.isClient ? 'self-end ' : 'self-start')} initial={{transform: message.isClient ? 'translateX(100%)' : 'translateX(-100%)'}} animate={{transform: 'translateX(0)'}}>
                        <div className={Class('px-4 py-2 max-w-72 min-w-4 rounded-2xl shadow-md', message.isClient ? 'bg-theme-500 ml-auto' : 'bg-white mr-auto')}>
                          <p className={Class('font-bold text-base whitespace-break-spaces', message.isClient ? 'text-white text-right' : 'text-theme-800 text-left')}>{message.message}</p>
                          <div className={Class('flex items-center mt-2', message.isClient ? 'justify-end' : 'justify-start')}>
                            {!message.isClient && (
                              <>
                                <p className="text-xs text-theme-800 font-bold">Cosmose</p>
                                <span className="text-xs text-theme-800 font-bold mx-1">•</span>
                              </>
                            )}
                            <p className={Class('text-xs font-bold', !message.isClient ? 'text-theme-800' : 'text-white')}>{toRelativeDate(message.created as DateTime)}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>
            {isRegistered && (
              <form onSubmit={(event) => message ? handleSubmit(event) : textareaRef.current && textareaRef.current.focus()} className="py-4" style={{
                display: 'flex',
                width: '100%',
                background: '#fff',
                overflow: 'hidden',
                borderRadius: '0 0 1.5rem 1.5rem',
                flex: '0 0 auto',
                paddingBottom: '1.1rem'
              }}>
              <textarea rows={rows} ref={textareaRef} placeholder="Votre message" autoFocus
                        onInput={handleInput}
                        onKeyDown={handleKeyDown}
                        value={message ? message : ''}
                        style={{
                          scrollbarColor: 'rgb(176 171 202) rgba(0, 0, 0, 0)',
                          scrollbarWidth: 'thin'
                        }}
                        className="w-full resize-none pl-4 pr-16 text-slate-800 text-[17px] font-bold"/>
                <button type="submit" disabled={!message || message.trim().length === 0} className="absolute right-4 text-theme-400 disabled:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" height={28} width={28} fill="currentColor" className="mr-0.5" viewBox="0 0 24 24">
                    <path xmlns="http://www.w3.org/2000/svg" d="M21,3.92,15,20.67a.5.5,0,0,1-.47.33h-.16a.51.51,0,0,1-.46-.29l-2.36-5a2,2,0,0,1,.34-2.21l3-3.28a.5.5,0,0,0,0-.69l-.38-.38a.5.5,0,0,0-.69,0l-3.28,3a2,2,0,0,1-2.21.34l-5-2.36A.51.51,0,0,1,3,9.67V9.51A.5.5,0,0,1,3.33,9L20.08,3a.5.5,0,0,1,.52.11l.26.26A.5.5,0,0,1,21,3.92Z"/>
                  </svg>
                </button>
              </form>
            )}
          </>
        )}
      </div>
      <audio ref={popRef}>
        <source src="/sons/pop.mp3" type="audio/mpeg"/>
      </audio>
    </div>
  );
}

export default ChatBox;
