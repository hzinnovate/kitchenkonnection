import React, { useState } from 'react'
import { Toggle, Input, InputGroup, Icon, Button } from 'rsuite';

export const SearchBar = () => {
    const [typeOfSearch, setTypeOfSearch] = useState('kitchen')
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false)

    return (
        <div>
            <div style={{ textAlign: 'right' }}>
                <span className={`text ${typeOfSearch === 'kitchen' && 'activeText'}`}>Kitchen Base Search</span>
                <Toggle className='toggle' checked={typeOfSearch === 'menu'} size="sm" onChange={() => setTypeOfSearch(typeOfSearch === 'kitchen' ? 'menu' : 'kitchen')} />
                <span className={`text ${typeOfSearch === 'menu' && 'activeText'}`}>Menu Base Search</span>
            </div>

            <div style={{ marginTop: '20px', display: 'flex' }}>
                <InputGroup size="lg" style={{ border: '1px solid red', boxShadow: '0px 0px 5px grey' }}>
                    <InputGroup.Addon style={{ background: isFilterMenuOpen ? 'red' : 'none', width: isFilterMenuOpen ? '100px' : '35px' }}>
                        <Icon style={{ color: isFilterMenuOpen ? 'white' : 'red' }} icon="search" />
                        {isFilterMenuOpen && <div style={{ color: 'white', marginLeft: '10px' }}>Search</div>}
                    </InputGroup.Addon>
                    {!isFilterMenuOpen && <Input placeholder="Search" />}
                    <InputGroup.Button onClick={() => { setIsFilterMenuOpen(!isFilterMenuOpen) }} style={{ backgroundColor: isFilterMenuOpen ? 'white' : 'red' }}>
                        <Icon style={{ color: isFilterMenuOpen ? 'red' : 'white', width: '100%' }} icon="bars" />
                        {isFilterMenuOpen && <div style={{ marginLeft: '10px' }}>Filters</div>}
                    </InputGroup.Button>
                </InputGroup>
                <Button size="lg" style={{ backgroundColor: 'black', marginLeft: '10px', width: '200px', color: 'white' }}>continue</Button>
            </div>

        </div>
    )
}
