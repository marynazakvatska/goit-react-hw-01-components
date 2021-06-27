import React from 'react';
import Profile from './components/Profile/Profile';
import { Statistics } from './components/Statistic/Statistics';
import { FriendList } from './components/Friends/FriendList';
import { TransactionHistory } from './components/Transaction/TransactionHistory';
import statisticalData from './statistical-data.json';
import friends from './friends.json';

import user from './user.json';
import transactions from './transactions.json';
/* import ColorPicker from './components/ColorPicker/ColorPicker';

const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
]; */



const App = () => {
    return (
        <div>

            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={statisticalData} />
            <Statistics stats={statisticalData} />

            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
            {/*     <ColorPicker options={colorPickerOptions} />
 */}
        </div>

    )
}

export default App;