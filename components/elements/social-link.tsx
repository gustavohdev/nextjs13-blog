import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const SocialLink = ({plataform, link}: { plataform: string; link: string}) => {
    
    const getIcon = (plataform: string) => {
        switch (plataform){
            case "facebook":
                return <Facebook size="20"/>;
            case "twitter":
                return <Twitter size="20" />
            case "instagram":
                return <Instagram size="20" />
            case "youtube":
                return <Youtube size="20" />
            case "linkedin":
                return <Linkedin size="20" />
            case "github":
                return <Github size="20" />
        }
    }
  
    return (
        <Link href={link}>{getIcon(plataform)}</Link>
  )
}

export default SocialLink