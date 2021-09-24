import React from 'react'

export default function Quote({quote}) {

    return (
        <div>
            <p>{quote.text}<br />
                <span>- {quote.author}</span>
            </p>
        </div>
    )
}
