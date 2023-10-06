import React from 'react';

function Header({ children }) {
    return(
        <div class="header">
            <a href="/" class="logo">Cart It</a>
            <div class="header-right">
                { children }
            </div>
        </div>
    );
}

export default Header;