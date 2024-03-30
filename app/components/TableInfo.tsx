import './TableInfo.css';
export default function TableInfo() {
    return (
        <div className="h-full mx-auto px-8">
            <div className="flex justify-between">
                <div>
                    <div>
                        <strong> <span>Audi</span> <span>A5</span> <span>2016</span></strong>
                    </div>
                    <div>
                        8T MY16 S line plus Coupe 2dr S tronic 7sp quattro 2.0T
                    </div>
                </div>

                <div>
                    <button className="subscribeButton">Subscribe to reveal price</button>
                </div>
            </div>

            <div>
                <div className="flex justify-left items-center">
                    <div className="flex items-center mr-5">
                        <div className="mr-1">
                            <div className="h-1 w-1 rounded-full bg-black"></div>
                        </div>
                        <div>82,640</div>
                    </div>
                    <div className="flex items-center mr-5">
                        <div className="mr-1">
                            <div className="h-1 w-1 rounded-full bg-black"></div>
                        </div>
                        <div>Above Average</div>
                    </div>

                    <div className="flex items-center mr-5">
                        <div className="mr-1">
                            <div className="h-1 w-1 rounded-full bg-black"></div>
                        </div>
                        <div>Southport (QLD)</div>
                    </div>

                    <div className="flex items-center mr-5">
                        <div className="mr-1">
                            <div className="h-1 w-1 rounded-full bg-black"></div>
                        </div>
                        <div>Dealership</div>
                    </div>

                    <div className="flex items-center mr-5">
                        <div className="mr-1">
                            <div className="h-1 w-1 rounded-full bg-black"></div>
                        </div>
                        <div>No</div>
                    </div>

                    <div className="flex items-center mr-5">
                        <div className="mr-1">
                            <div className="h-1 w-1 rounded-full bg-black"></div>
                        </div>
                        <div>Mar 2024</div>
                    </div>

                    <div className="flex items-center mr-5">
                        <div className="mr-1">
                            <div className="h-1 w-1 rounded-full bg-black"></div>
                        </div>
                        <div>  <a>More</a></div>
                    </div>

                </div>
            </div>
        </div>

    );

}
