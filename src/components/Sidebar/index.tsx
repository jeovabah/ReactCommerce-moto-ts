import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { Nav } from '../Nav';
import { Container } from "./styles"

interface SidebarProps {
  active: (value: boolean) => void;
}
export const Sidebar = ({ active }: SidebarProps) => {
  const exitSidebar = () => active(false);
  return (
    <>
    <FaTimes onClick={exitSidebar} />
    <Container>
        <Nav />
        
    </Container>
    </>
  )
}
