'use client';
import { useEffect } from 'react';

export default function SignupRedirect() {
  useEffect(() => {
    window.location.replace('https://web.afuchat.com/register');
  }, []);
  return null;
}
