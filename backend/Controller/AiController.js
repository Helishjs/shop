const ResponseGPT = async (req,res) =>{
    // app/api/chat/route.js
    export async function POST(req) {
        const body = await req.json();
        const userMessage = body.message;

        const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'; // 🔥 Bạn điền key thật vào đây

        // Gửi yêu cầu lên OpenAI
        const gptResponse = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'Bạn là nhân viên hỗ trợ khách hàng thân thiện.' },
                    { role: 'user', content: userMessage }
                ],
                temperature: 0.7,
                max_tokens: 500,
            }),
        });

        const gptData = await gptResponse.json();

        const reply = gptData.choices?.[0]?.message?.content || "Xin lỗi, hiện tại tôi chưa thể trả lời.";

        return new Response(JSON.stringify({ reply }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
module.exports = ResponseGPT;