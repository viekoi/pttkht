'use client'
import React, { useState, useEffect } from 'react'
import Container from '../Container';
import Logo from '../Logo';
import SearchBar from './SearchBar';
import UserButton from './UserButton';
import CartButton from './CartButton';
import Categories from './Categories';


const NavBar = ({ currentUser }) => {
    const [shadow, setShadow] = useState(false);

    const safeUser = currentUser ? {
        ...currentUser,
        createdAt: currentUser.createdAt.toISOString(),
        updatedAt: currentUser.updatedAt.toISOString(),
        emailVerified:
            currentUser.emailVerified?.toISOString() || null,
    } : undefined


    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);
    return (
        <div className={shadow
            ? ' bg-white fixed w-full h-small lg:h-medium shadow-xl z-[100] ease-in-out duration-300 top-0 '
            : 'bg-white fixed w-full h-small lg:h-medium z-[100] top-0 '}>
            <Container>
                <div className="flex items-center justify-between gap-3 lg:gap-10 h-full">
                    <Logo></Logo>
                    <SearchBar></SearchBar>
                    <div className="flex items-center justify-center font-semibold text-sm lg:text-lg gap-1">
                        <UserButton currentUser={safeUser}></UserButton>
                        <CartButton></CartButton>

                    </div>
                </div>
            </Container>
            <Categories></Categories>
        </div>
    )
}

export default NavBar
