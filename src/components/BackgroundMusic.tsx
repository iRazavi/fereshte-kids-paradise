
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try to autoplay when component mounts
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        // Autoplay was prevented
        console.log('Autoplay prevented');
      }
    };

    // Set up audio properties
    audio.volume = 0.3;
    audio.loop = true;

    playAudio();

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Audio play error:', error);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-2">
      <audio ref={audioRef} preload="auto">
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
        <source src="data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAAVN3aXRjaCBQbHVzIFN5bnRoZXNpemVyIDMuMABUSVQyAAAABgAAAjExAFRQRTEAAAAKAAAAQmVhdCBCb3gAVENPTgAAAAYAAAIwOABUQUxCAAAAEAAAAENhblJlbGF4ZSBGYWN0b3J5AFRZRVIAAAAKAAAAMjAxMCAwNS0yNQBURU5DAAAAHQAAAVN3aXRjaCBQbHVzIFN5bnRoZXNpemVyIDMuMABUWFhYAAAADgAAAUVuZ2luZWVyAEphcmVkAP/7EEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7EEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7EEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7EEQAAANIAUAmMTpgAAANIAAAASUVH/7EEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7EEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgpJSSklJJJJJJJJBSSSSSSSS" type="audio/mpeg" />
      </audio>
      
      <Button
        onClick={togglePlay}
        size="sm"
        className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white rounded-full w-12 h-12 p-0 shadow-lg"
        title={isPlaying ? 'توقف موسیقی' : 'پخش موسیقی'}
      >
        {isPlaying ? '⏸️' : '▶️'}
      </Button>
      
      <Button
        onClick={toggleMute}
        size="sm"
        className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white rounded-full w-12 h-12 p-0 shadow-lg"
        title={isMuted ? 'روشن کردن صدا' : 'خاموش کردن صدا'}
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </Button>
    </div>
  );
};

export default BackgroundMusic;
