import React,{useEffect,useSt} from 'react'


const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(formData);
    };

    return (
        <>
            <div className="w-full bg-[#FFFFFF]">
                <div className="col-span-2 mx-96">
                    <h1 className="text-6xl font-black pt-24">Contact Me</h1>
                    <form onSubmit={handleSubmit} className="mt-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md" />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
                                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md" />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="mt-1 p-2 w-full border rounded-md"></textarea>
                            </div>
                            <div className="col-span-2">
                                <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
           
        </>
    );
}

export default Home;
