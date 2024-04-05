function TeachersList() {
    return (
        <div className="w-full border border-slate-200 p-[10px] rounded-[10px]">
            <div className='flex justify-between items-center mb-[20px]'>
                <div>Id</div>
                <div>Name</div>
                <div>Job</div>
                <div>Group</div>
                <div>Students</div>
            </div>
            <div className='flex flex-col gap-[15px]'>
                <div className='flex items-center justify-between px-[15px] w-full h-[50px] bg-white rounded-[10px] drop-shadow'>
                    <div className='w-[30px] h-[30px] bg-orange-300 rounded-full'></div>
                    <div>Abdusalomov Abdulloh</div>
                    <div>Frontend</div>
                    <div>4</div>
                    <div>40</div>
                </div>
                <div className='flex items-center justify-between px-[15px] w-full h-[50px] bg-white rounded-[10px] drop-shadow'>
                    <div className='w-[30px] h-[30px] bg-orange-300 rounded-full'></div>
                    <div>Abdusalomov Abdulloh</div>
                    <div>Frontend</div>
                    <div>4</div>
                    <div>40</div>
                </div>
                <div className='flex items-center justify-between px-[15px] w-full h-[50px] bg-white rounded-[10px] drop-shadow'>
                    <div className='w-[30px] h-[30px] bg-orange-300 rounded-full'></div>
                    <div>Abdusalomov Abdulloh</div>
                    <div>Frontend</div>
                    <div>4</div>
                    <div>40</div>
                </div>
            </div>
        </div>

    )
}

export default TeachersList