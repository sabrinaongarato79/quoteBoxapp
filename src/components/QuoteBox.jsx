import Button from './Button'
import QuoteBoxHeader from './QuoteBoxHeader';

const QuoteBox = (params) => {
    
    return <div id="card">
        <QuoteBoxHeader quote={params.data.quote} color={params.color} />
        <div className="text-author" style={{color: params.color}}>{params.data.author}</div>
        <div className='content-btn'>
            <Button action={params.action} color={params.color} />
        </div>
    </div> 
}

export default QuoteBox;