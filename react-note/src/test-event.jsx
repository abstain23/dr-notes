import React, { memo, useCallback, useEffect } from 'react'

/**
 * react 的事件机制
 * 首先会经历原生的捕获阶段，然后经历原生的冒泡阶段，冒泡到docment身上，这个时候就会被react的事件机制捕获，开始走react 的流程，捕获冒泡，然后再到docment上... 然后再网上原生冒泡...
 */

export default memo(function TestEvent() {

    const wrapperClick = useCallback(() => {
        console.log('C:wrapper react click')
    }, [])


    const btnClick = useCallback((e) => {
        e.stopPropagation()
        console.log('D:btn react click')
    }, [])

    useEffect(() => {
        
        document.getElementById('wrapper').addEventListener('click', () => {
            console.log('A:wrapper click')
        })
        document.getElementById('inner-btn').addEventListener('click', (e) => {
            // e.stopPropagation()
            console.log('B:inner-btn click')
        })
        document.addEventListener('click', (e) => {
            console.log("E:docment click")
        })
        window.addEventListener('click', () => {
            console.log('F:window click')
        })
    }, [])

    return (
        <div>
            <h1>测试react 事件机制</h1>
            <div id='wrapper' onClick={wrapperClick}>
                <button id='inner-btn' onClick={btnClick}>
                    button
                </button>
            </div>
        </div>
    )
})
