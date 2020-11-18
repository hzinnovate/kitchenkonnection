import React from 'react'
import { Button } from 'rsuite';

export const HomeButtons = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', fontSize: '24px', marginTop: '20px' }}>
            <Button className="mainBtn" size="md" appearance="subtle">DAILY MENU</Button>
            <div>
                |
            </div>
            <Button className="mainBtn" size="md" appearance="subtle">WEEKLY MENU</Button>
            <div>
                |
            </div>
            <Button className="mainBtn" size="md" appearance="subtle">FROZEN MENU</Button>
            <div>
                |
            </div>
            <Button className="mainBtn" size="md" appearance="subtle">OCCASIONS</Button>
            <div>
                |
            </div>
            <Button className="mainBtn" size="md" appearance="subtle">CAKES</Button>
        </div>
    )
}
