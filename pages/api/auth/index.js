// Default Call

export default async function Handler(req, res) {
    res.status(200).json({user: "Hello User!"});
}