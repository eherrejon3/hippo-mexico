import Content from './Content';

export function Footer() {
    return (
        <div 
            className='relative h-[400px] lg:h-[600px]'
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
            <div className='relative h-[calc(100vh+400px)] lg:h-[calc(100vh+600px)] -top-[100vh]'>
                <div className='h-[400px] lg:h-[600px] sticky top-[calc(100vh-400px)] lg:top-[calc(100vh-600px)]'>
                    <Content />
                </div>
            </div>
        </div>
    );
}