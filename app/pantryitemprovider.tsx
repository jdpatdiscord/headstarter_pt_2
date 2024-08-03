import { useState, useEffect } from 'react';

import { collection, query, getDoc, addDoc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

import dateToFutureReferenceReadableText from './easytextdateprovider';
import PantryItem from './pantryitem';
import PantryItemAddIcon from './pantryitemaddicon';

export default function PantryItemProvider(props)
{
    const [items, setItems] = useState([]);
    const [_newItem, setNewItem] = useState({ name: '', count: 0, expirationDate: 0, unitMeasurement: '' });

    const removeItem = async (e) =>
    {
        e.preventDefault();
    }

    const addItem = async (newItem) =>
    {
        if (newItem.name == "")
            return;

        setNewItem({ 
            name: newItem.name, 
            count: newItem.count, 
            expirationDate: newItem.expirationDate,
            unitMeasurement: newItem.unitMeasurement 
        });

        await addDoc(collection(db, "pantryitems"), {
            name: newItem.name, 
            count: newItem.count, 
            expirationDate: newItem.expirationDate,
            unitMeasurement: newItem.unitMeasurement 
        });
    }

    useEffect(() => {
        const results = query(collection(db, "pantryitems"));
        const unsubscribe = onSnapshot(results, (queryResults) => {
            let itemsArray = [];

            queryResults.forEach((doc) => {
                itemsArray.push({...doc.data(), id: doc.id});
            });

            if ((itemsArray.length == items.length) && (items.length != 0))
                return;

            setItems(itemsArray);
        });
    }, [_newItem]);
    

    const pantryDivs = items.map((item) => {
        return <PantryItem 
            iconPath="/static/1_apple.png" 
            countText={item.count} 
            singleOrPluralItemName={item.name}
            id={item.id}
            hasExpirationText={true}
            expirationText={dateToFutureReferenceReadableText(item.expirationDate)}/>
    });

    pantryDivs.unshift(
        <PantryItemAddIcon onClick={ () => props.setVisibility(true) }/>
    );

    return pantryDivs;
}