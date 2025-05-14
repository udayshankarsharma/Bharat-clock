let CurrentTime = () => {
    let time = new Date();
    return (
        <p className="text-lg text-emerald-500 text-center mt-6">
            This is the current Time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
        </p>
    );
};
export default CurrentTime;