'use client';


import { useEffect } from 'react';
import { init as FullStoryInit, isInitialized } from '@fullstory/browser';


export default function FullStory() {
    useEffect(() => {
       const orgId = process.env.NEXT_PUBLIC_FULLSTORY_ORG_ID;

       if (!orgId) {
        console.warn('FullStory Org ID is missing.');
        return;
      }

      if (isInitialized()) {
        return;
      }




  
    FullStoryInit({
        orgId: orgId,
        devMode: process.env.NODE_ENV === 'development',
        debug: process.env.NODE_ENV === 'development',
    });
    
    }, []);
    return null;
}