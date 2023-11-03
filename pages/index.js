import '../components/MainProgram';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react'
import { createClient } from '@vercel/kv';
import { NextResponse } from 'next/server';
import { Init } from '../components/start'
import { Suspense } from 'react'
var playernum;
let kv = createClient({
  url: process.env.NEXT_PUBLIC_KV_REST_API_URL,
  token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN
});

import { Set, GetID } from '../components/func';
let id = GetID();
export default function Home() {
  function start(){
      var playerid = document.getElementById("playernum").value;
      if(!(playerid >0 && playerid <=14)) return;
      else {
        /*Set("PLAYERID",playerid);*/
        document.location.href = "/firstpage";
      }
    }
  return (
    
    <>
      
      <div className={styles.container}>
        <input id = "playernum" />
        <button onClick = {start}>起動する</button>
      </div>
    </>
  );
}
