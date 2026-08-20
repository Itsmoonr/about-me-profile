// ============================================================
//  TRANSLATION DATA
// ============================================================
const T = {
    en: {
        skipLink: "Skip to Content",
        music: { title: "Ambient · Lo-fi", artist: "Ross Nguyen" },
        hero: {
            subtitle: "Designer · Developer · Storyteller",
            tagline: "From the glamour of Ho Chi Minh City to Tokyo, the City of Lights, I've been writing a story that connects two countries.",
            invite: "Every line of code, every frame, every story here is a piece of my journey.",
            cta: "Begin the journey",
            contact: "Get in touch",
            caption: "Tokyo · 2023 · a rare quiet moment",
            scroll: "scroll"
        },
        nav: { profile: "Profile", chapters: "Chapters", portfolio: "Portfolio", abilities: "Abilities", journal: "Journal", contact: "Contact" },
        profile: {
            label: "Profile",
            title: "Who is <span class='highlight'>Ross?</span>",
            quote: "\"Grateful for those who left, cherishing those who stayed. Thank you, past, present, and future. And I hope this moment lasts forever.\"",
            desc: "I grew up in the city named after Uncle Ho, Vietnam, where it rained more often than the sun came out.",
            desc2: "Today I'm a university student, a designer, and every once in a while, a writer. I take photos to hold onto the small moments people usually scroll past. I write code to make things that feel a little alive. I design because I've learned that how something looks is its own kind of kindness to whoever's looking.",
            desc3: "This is my story so far, and it's probably going to be a long one.",
            stat: {
                codename: "Name", location: "Location", origin: "Origin", path: "Path", pathValue: "University · Design",
                essence: "Essence", essenceValue: "Curious · Empathetic · Philosopher",
                spec: "Specialization", specValue: "Tech × Design × Story",
                listening: "Listening to", listeningValue: "Lo-fi · Rain · Ambient",
                chapter: "Current chapter", chapterValue: "Building bridges between Vietnam and Japan"
            }
        },
        chapters: {
            label: "Story Mode",
            title: "The <span class='highlight'>chapters</span>",
            theme: "From Vietnam to the world, six chapters of figuring myself out",
            1: { number: "Chapter I", title: "Homeland · Vietnam", desc: "I grew up under a sky that cried a lot. The monsoon taught me early that beauty and intensity travel together. I learned to spot stories in ordinary things, an old man's smile, the hum of a motorbike passing by. Creativity, for me, started as a way to hold onto moments before they slipped away." },
            2: { number: "Chapter II", title: "The Leap · Arrival in Japan", desc: "Sixteen years old, one backpack, and a head full of questions I couldn't explain in any language. Loneliness felt like a blank page back then. Slowly, I started filling it in, with new friends, new words, and the quiet realization that maybe I belonged somewhere I never expected to." },
            3: { number: "Chapter III", title: "Prime Time · High School Years", desc: "High school was where I figured out I could live two lives at once. Calculus by day, writing stories nobody would ever read by night. I shot my first roll of film, built my first website, tiny little universes, but they were mine." },
            4: { number: "Chapter IV", title: "A Clean Slate · Cybersecurity Volunteer", desc: "For three years, I stood between everyday people and the ones trying to take advantage of them. Nobody made me do it. I just believed technology should protect people, not be a tool for exploiting them. It taught me that engineering, at its core, is ethics you practice every day." },
            5: { number: "Chapter V", title: "Scholar · University", desc: "University taught me that design isn't about making things pretty, it's about making someone feel seen. I still walk these halls, notebooks full of ideas somewhere between code and poetry." },
            6: { number: "Chapter VI", title: "Horizon · What's Next", desc: "I'm getting ready to take what I've learned out into the world, not as an expert, but as someone who still believes curiosity is the most useful skill there is. New cultures, new people to walk alongside and collaborate with, and a future where a designer doesn't have to care about borders." }
        },
        portfolio: {
            label: "Selected Work",
            title: "Projects I've <span class='highlight'>built</span>",
            intro: "Here are a few things I've made, each one taught me something about design, code, or people.",
            1: { stamp: "Impact", title: "Think Fraud", summary: "Helping over 50,000 people avoid getting scammed online.", brief: "I used to know exactly how to scam people online and take their money. But that past isn't a stain on me, if anything, it's exactly why I ended up helping over 50,000 people avoid getting scammed. Understanding how scammers operate was the only way I could stop them.", tags: "Anti-Fraud · Community · Education", status: "Status: Complete" },
            2: { stamp: "Craft", title: "Restaurant Cashier", summary: "Three years handling the register and the books at a ramen house.", brief: "Three years of auditing, counting every single cent. Every shift taught me a little more about responsibility. Getting every cent to match wasn't about being perfect, it was my way of showing I cared about doing it right.", tags: "Finance · Trust · Hospitality", status: "Status: Complete" },
            3: { stamp: "Obsession", title: "Global Elite", summary: "Reaching the top through talent and relentless practice.", brief: "If you think knowing how to hold a mouse is enough to play games, come try CS:GO (CS2), it'll change your mind fast. You'll need real talent and a mountain of grueling practice. Reflexes plus stubborn practice are what got me here.", tags: "Tactics · CS2 · Faceit Lvl 10", status: "Status: Active" },
            4: { stamp: "Bridge", title: "Polyglot", summary: "Four languages, endless connections.", brief: "7+ years living abroad, three languages down, working on a fourth. To me, language isn't just vocabulary, it's a door into someone else's world.", tags: "Vietnamese · Japanese · English · German", status: "Status: Active" }
        },
        abilities: {
            label: "Abilities",
            title: "Unlocked <span class='highlight'>skills</span>",
            cat1: "The Craft", skill1: "Creative Thinking", skill2: "Storytelling", skill3: "UI/UX Design", skill4: "Photography", skill5: "Video Editing",
            cat2: "The Tools", skill6: "Web Development", skill7: "Research", skill8: "Cybersecurity Basics",
            cat3: "Languages",
            lang: { vi: "Vietnamese (Native)", en: "English (Fluent)", ja: "Japanese (Fluent)" }
        },
        journal: {
            label: "Cinematic Journal",
            title: "Frames <span class='highlight'>of life</span>",
            prev: "Previous", next: "Next",
            1: { desc: "2022 · The first time Tokyo turned white with snow, I realized I wasn't a stranger here anymore." },
            2: { desc: "2024 · Late-night design work, when the world goes quiet and my head gets loud with ideas." },
            3: { desc: "2023 · Rain under the lights, a city that never really stops dreaming." },
            4: { desc: "2024 · That quiet hour when ideas start turning into something real." },
            5: { desc: "2023 · A stranger's smile, just enough to remind me connection is everywhere if you look." },
            6: { desc: "2022 · A temple lit up at night, one still moment in a world that never slows down." }
        },
        contact: {
            label: "Get in Touch",
            title: "Open <span class='highlight'>channel</span>",
            invite: "Collabs, freelance work, or just a chat, I'm always up for it.",
            form: { name: "Name", email: "Email", subject: "Subject", message: "Message", submit: "Send Message", nameError: "Please enter your name", emailError: "Please enter a valid email", messageError: "Please enter a message", success: "✓ Message sent! I'll get back to you soon." }
        },
        ending: { title: "Save Point", message: "The story's still going.", continue: "Continue?", reflection: "Thanks for walking through these pages with me. If you saw a bit of your own journey somewhere in here, I'd genuinely love to hear about it. Let's write the next chapter together.", signature: "Take care, Ross" },
        toast: { easterEgg: "✦ Secret found: Curious explorer, confirmed", gameOver: "💀 Game Over. Press Y to respawn.", respawn: "✦ Respawned. Keep exploring.", audioError: "⚠ Audio unavailable" }
    },
    vi: {
        skipLink: "Skip đến Nội dung",
        music: { title: "Nhạc nền · Lo-fi", artist: "Ross Nguyen" },
        hero: {
            subtitle: "Designer · Developer · Người kể câu chuyện",
            tagline: "Từ Hồ Chí Minh hoa lệ đến Thành Phố Ánh Sáng Tokyo, mình đã và đang viết lên câu chuyện kết nối 2 đất nước.",
            invite: "Mỗi dòng code, mỗi khung hình, mỗi câu chuyện ở đây đều là một mảnh trong hành trình của mình.",
            cta: "Bắt đầu cuốn hành trình",
            contact: "Liên hệ với mình",
            caption: "Tokyo · 2023 · một khoảnh khắc hiếm hoi yên tĩnh",
            scroll: "cuộn xuống"
        },
        nav: { profile: "Hồ sơ", chapters: "Các chương", portfolio: "Dự án", abilities: "Kỹ năng", journal: "Nhật ký", contact: "Liên hệ" },
        profile: {
            label: "Hồ sơ",
            title: "Ross là <span class='highlight'>ai?</span>",
            quote: "\"Biết ơn những người đã rời đi, trân trọng những người còn ở lại. Cảm ơn quá khứ - hiện tại - tương lai. Và mong cho giây phút này còn tồn tại mãi mãi.\"",
            desc: "Mình lớn lên ở thành phố mang tên Bác, Việt Nam, nơi mưa nhiều hơn nắng. Năm 16 tuổi, mình xách balo qua Nhật với đầu óc chất đầy những giấc mơ mà lúc đó còn chưa biết diễn tả sao cho đúng.",
            desc2: "Giờ mình là sinh viên đại học, cũng là designer, và thỉnh thoảng là viết truyện. Mình chụp ảnh để giữ lại những khoảnh khắc nhỏ mà người ta hay lướt qua. Mình viết code để làm ra những thứ có chút \"hồn\". Mình làm thiết kế vì mình học được rằng hình thức bề ngoài cũng là một dạng tử tế đối với người nhìn.",
            desc3: "Đây là câu chuyện của mình hiện tại, và chắc nó vẫn còn dài.",
            stat: {
                codename: "Tên", location: "Vị trí", origin: "Xuất thân", path: "Con đường", pathValue: "Đại học · Thiết kế",
                essence: "Bản chất", essenceValue: "Tò mò · Đồng cảm · Hay suy nghĩ triết lý",
                spec: "Chuyên môn", specValue: "Công nghệ × Thiết kế × Kể chuyện",
                listening: "Đang nghe", listeningValue: "Lo-fi · Tiếng mưa · Ambient",
                chapter: "Chương hiện tại", chapterValue: "Làm cầu nối giữa Việt và Nhật"
            }
        },
        chapters: {
            label: "Chế độ Cốt truyện",
            title: "Những <span class='highlight'>chương truyện</span>",
            theme: "Từ Việt Nam ra thế giới, 6 chương của một hành trình tự tìm hiểu bản thân",
            1: { number: "Chương I", title: "Quê nhà · Việt Nam", desc: "Mình lớn lên dưới bầu trời hay khóc. Mùa mưa dạy mình từ sớm rằng cái đẹp và sự dữ dội thường đi chung với nhau. Mình học được cách nhìn ra chuyện hay ho trong những thứ bình thường nhất, nụ cười của một ông cụ, tiếng xe máy chạy ngang qua. Với mình, sáng tạo bắt đầu chỉ đơn giản là muốn giữ lại khoảnh khắc trước khi nó trôi qua mất." },
            2: { number: "Chương II", title: "Cú nhảy · Đặt chân đến Nhật", desc: "16 tuổi, một cái balo, và cả đống câu hỏi trong đầu mà chẳng ngôn ngữ nào diễn tả nổi. Lúc đó cô đơn giống như một tờ giấy trắng. Rồi mình từ từ tô lên đó, bằng những người bạn mới, những từ mới học, và cái cảm giác nhận ra nhẹ nhàng rằng: có khi mình cũng thuộc về một nơi mà trước giờ chưa từng nghĩ tới." },
            3: { number: "Chương III", title: "Thời Prime · Những năm cấp ba", desc: "Cấp ba là lúc mình nhận ra mình có thể sống hai cuộc đời cùng lúc. Ban ngày học giải tích, ban đêm ngồi viết mấy câu chuyện chẳng ai đọc. Mình quay chụp cuộn phim đầu tiên, làm cái web đầu tiên, những vũ trụ nhỏ xíu, nhưng đúng là của riêng mình." },
            4: { number: "Chương IV", title: "Kẻ quay đầu · Tình nguyện an ninh mạng", desc: "3 năm, mình đứng giữa những người bình thường và những kẻ chỉ chực lợi dụng họ. Không ai bắt mình làm cả. Mình chỉ tin công nghệ nên là thứ để bảo vệ người ta, chứ không phải công cụ để trục lợi bất chính từ người khác. Nó dạy mình rằng làm kỹ thuật, suy cho cùng, cũng là một dạng đạo đức được thực hành mỗi ngày." },
            5: { number: "Chương V", title: "Học giả · Đại học", desc: "Đại học dạy mình rằng thiết kế không phải là làm cho đẹp, mà là làm sao để ai đó cảm thấy được nhìn thấy. Mình vẫn đi lại trong mấy hành lang trường, sổ tay đầy những ý tưởng lưng chừng giữa code và thơ." },
            6: { number: "Chương VI", title: "Chân trời · Điều tiếp theo", desc: "Mình đang chuẩn bị mang những gì học được ra ngoài kia, không phải với tư cách chuyên gia, mà như một đứa vẫn tin sự tò mò là kỹ năng đáng giá nhất. Văn hóa mới, những người mới để đồng hành, hợp tác, và một tương lai mà một designer chẳng cần quan tâm đến biên giới." }
        },
        portfolio: {
            label: "Dự án nổi bật",
            title: "Những dự án mình đã <span class='highlight'>từng làm</span>",
            intro: "Đây là vài thứ mình đã làm, mỗi cái dạy mình một điều gì đó về thiết kế, code, hoặc về con người.",
            1: { stamp: "Tác động", title: "Think Fraud", summary: "Giúp hơn 50,000 người tránh khỏi lừa đảo online.", brief: "Mình từng biết chính xác cách để lừa đảo online, cướp tiền của người khác. Nhưng quá khứ đó không phải vết nhơ, ngược lại nó là lý do mình cuối cùng lại giúp hơn 50,000 người tránh khỏi lừa đảo. Hiểu rõ cách bọn lừa đảo hoạt động là cách duy nhất để mình ngăn được chúng.", tags: "Chống lừa đảo · Cộng đồng · Giáo dục", status: "Trạng thái: Hoàn thành" },
            2: { stamp: "Tay nghề", title: "Restaurant Cashier", summary: "3 năm phụ trách thu ngân và sổ sách ở một nhà hàng ramen.", brief: "3 năm, kiểm toán, ngồi đếm từng đồng. Mỗi ca làm dạy mình thêm một chút về trách nhiệm. Khớp đúng từng đồng tiền không phải vì mình cầu toàn, mà là cách mình chứng minh mình để tâm vào việc đang làm.", tags: "Tài chính · Niềm tin · Ngành dịch vụ", status: "Trạng thái: Hoàn thành" },
            3: { stamp: "Đam mê", title: "Global Elite", summary: "Chạm đến đỉnh cao nhờ năng khiếu và luyện tập không ngừng.", brief: "Nếu bạn nghĩ chỉ cần biết cầm chuột sẽ chơi được game thì mời bạn đến CS:GO (CS2) tựa game sẽ thay đổi định kiến đó của bạn. Bạn sẽ cần cả tài năng và cả núi giờ khổ luyện. Phản xạ cộng với sự lì lợm khi luyện tập là thứ đưa mình đến đây.", tags: "Chiến thuật · CS2 · Faceit Lvl 10", status: "Trạng thái: Đang tiếp diễn" },
            4: { stamp: "Cầu nối", title: "Polyglot", summary: "Bốn ngôn ngữ, vô số kết nối.", brief: "Hơn 7 năm sống xa nhà, thành thạo 3 ngôn ngữ, đang học thêm ngôn ngữ thứ 4. Với mình, ngôn ngữ không chỉ là từ vựng, nó là cánh cửa để mình bước vào thế giới của người khác.", tags: "Việt · Nhật · Anh · Đức", status: "Trạng thái: Đang tiếp diễn" }
        },
        abilities: {
            label: "Kỹ năng",
            title: "Những <span class='highlight'>kỹ năng đã mở khóa</span>",
            cat1: "Nghệ thuật", skill1: "Tư duy sáng tạo", skill2: "Kể chuyện", skill3: "Thiết kế UI/UX", skill4: "Nhiếp ảnh", skill5: "Dựng phim",
            cat2: "Công cụ", skill6: "Phát triển Web", skill7: "Nghiên cứu", skill8: "Kiến thức cơ bản về An ninh mạng",
            cat3: "Ngôn ngữ",
            lang: { vi: "Tiếng Việt (Bản ngữ)", en: "Tiếng Anh (Thông thạo)", ja: "Tiếng Nhật (Thông thạo)" }
        },
        journal: {
            label: "Nhật ký Điện ảnh",
            title: "Những <span class='highlight'>khung hình cuộc sống</span>",
            prev: "Trước", next: "Sau",
            1: { desc: "2022 · Lần đầu Tokyo phủ tuyết trắng, mình chợt nhận ra mình không còn là người lạ ở đây nữa." },
            2: { desc: "2024 · Thiết kế lúc nửa đêm, lúc thế giới ngủ yên còn đầu mình thì ồn ào ý tưởng." },
            3: { desc: "2023 · Mưa dưới ánh đèn, một thành phố chẳng bao giờ ngừng mơ mộng." },
            4: { desc: "2024 · Giờ khắc yên tĩnh, lúc ý tưởng bắt đầu thành hình thật sự." },
            5: { desc: "2023 · Nụ cười của một người lạ, đủ để nhắc mình rằng kết nối luôn ở quanh đây thôi, chỉ cần để ý." },
            6: { desc: "2022 · Ngôi đền ngập ánh sáng lúc đêm, một phút giây tĩnh lặng giữa cái thế giới cứ mãi vội vã." }
        },
        contact: {
            label: "Liên hệ",
            title: "Mở <span class='highlight'>kết nối</span>",
            invite: "Hợp tác, việc freelance, hay đơn giản chỉ muốn tám chuyện, lúc nào mình cũng sẵn lòng.",
            form: { name: "Tên", email: "Email", subject: "Chủ đề", message: "Lời nhắn", submit: "Gửi tin nhắn", nameError: "Vui lòng nhập tên của bạn", emailError: "Vui lòng nhập email hợp lệ", messageError: "Vui lòng nhập lời nhắn", success: "✓ Đã gửi! Mình sẽ phản hồi bạn sớm nhất có thể." }
        },
        ending: { title: "Save Point", message: "Câu chuyện vẫn đang tiếp tục.", continue: "Tiếp tục?", reflection: "Cảm ơn bạn đã đi cùng mình qua từng trang này. Nếu bạn thấy đâu đó bóng dáng hành trình của chính mình, mình rất muốn nghe bạn kể. Cùng viết tiếp chương sau nhé.", signature: "Thân Ái, Ross" },
        toast: { easterEgg: "✦ Tìm thấy bí mật: Xác nhận là một kẻ ham khám phá", gameOver: "💀 Game Over. Nhấn Y để hồi sinh.", respawn: "✦ Đã hồi sinh. Tiếp tục khám phá thôi.", audioError: "⚠ Không phát được âm thanh" }
    },
    ja: {
        skipLink: "コンテンツへスキップ",
        music: { title: "アンビエント · Lo-fi", artist: "Ross Nguyen" },
        hero: {
            subtitle: "デザイナー · デベロッパー · ストーリーテラー",
            tagline: "煌びやかなホーチミン市から、光の都・東京まで、僕は二つの国をつなぐ物語を書き続けている。",
            invite: "ここにあるコードの一行一行、フレームの一枚一枚、物語のすべてが、僕の旅の一部だ。",
            cta: "旅を始める",
            contact: "連絡する",
            caption: "東京 · 2023年 · めずらしく静かだった瞬間",
            scroll: "スクロール"
        },
        nav: { profile: "プロフィール", chapters: "チャプター", portfolio: "ポートフォリオ", abilities: "スキル", journal: "ジャーナル", contact: "連絡先" },
        profile: {
            label: "プロフィール",
            title: "<span class='highlight'>Ross</span>って、どんな人?",
            quote: "「去っていった人たちに感謝を、そばにいてくれる人たちを大切に。過去にも、今にも、これからにも、ありがとう。そしてこの瞬間が、ずっと続きますように。」",
            desc: "僕はベトナムの、ホー・チ・ミン氏(ホーおじさん)の名前がついた街、ホーチミン市で育った。晴れの日より、雨の日の方が多いような街だった。",
            desc2: "今は大学生で、デザイナーで、たまに物語を書く人間でもある。写真を撮るのは、みんなが見逃しがちな小さな瞬間を残しておきたいから。コードを書くのは、ちょっとでも命が宿ったようなものを作りたいから。デザインをするのは、見た目もまた、見る人への優しさの一つなんだって学んだから。",
            desc3: "これが今のところの僕の物語。多分、まだまだ長くなると思う。",
            stat: {
                codename: "名前", location: "現在地", origin: "出身", path: "進む道", pathValue: "大学 · デザイン",
                essence: "本質", essenceValue: "好奇心旺盛 · 共感力高め · 哲学者気取り",
                spec: "専門分野", specValue: "テクノロジー × デザイン × ストーリーテリング",
                listening: "今聴いてるもの", listeningValue: "Lo-fi · 雨音 · アンビエント",
                chapter: "今のチャプター", chapterValue: "ベトナムと日本の懸け橋になること"
            }
        },
        chapters: {
            label: "ストーリーモード",
            title: "<span class='highlight'>チャプター</span>たち",
            theme: "ベトナムから世界へ、自分を見つけていく6つの章",
            1: { number: "第一章", title: "故郷 · ベトナム", desc: "よく雨が降る空の下で育った。あの雨季が、早いうちに教えてくれた。美しさと激しさは、意外と隣り合わせにあるんだって。おじいさんの微笑みとか、バイクの音とか、ありふれたものの中に物語を見つけることを覚えた。創作って、僕にとっては、過ぎ去っていく瞬間をちょっとでも留めておきたいっていう気持ちから始まったんだと思う。" },
            2: { number: "第二章", title: "跳躍 · 来日", desc: "16歳、リュック一つと、どの言語でも言い表せないくらいの疑問を抱えて日本に着いた。あのときの孤独は、真っ白な紙みたいなものだった。そこに新しい友達とか、新しく覚えた言葉とかを少しずつ塗っていった。そしてある日、静かに気づいたんだ。あ、自分にもここに居場所があるのかもって。" },
            3: { number: "第三章", title: "Prime Time · 高校時代", desc: "高校では、自分の中に二つの人生を同時に生きられるって気づいた。昼は微分積分、夜は誰にも読まれない物語を書く。初めてフィルムで写真を撮って、初めて自分のサイトを作った。小さいけど、確かに自分だけのものだった。" },
            4: { number: "第四章", title: "生まれ変わった僕 · サイバーセキュリティボランティア", desc: "3年間、普通の人たちと、その人たちを利用しようとする側との間に立ち続けた。誰かに頼まれたからじゃない。技術は人を裏切る道具じゃなくて、守るためのものであるべきだと思ってた。それで気づいたのは、エンジニアリングって、実は毎日の中で倫理を実践することでもあるんだなってこと。" },
            5: { number: "第五章", title: "学徒 · 大学生活", desc: "大学に来て、デザインって物を綺麗にすることじゃないんだって学んだ。それより、その人が「自分は見てもらえてるんだ」って感じられるようにすることなんだと思う。今も大学の廊下を歩いてて、ノートはコードと詩の間くらいの、なんとも言えないアイデアでいっぱいだ。" },
            6: { number: "第六章", title: "地平線 · 次の場所へ", desc: "今学んでることを、外の世界に持っていく準備をしてる。専門家としてじゃなくて、好奇心が一番の武器だってまだ信じてる一人の学生として。新しい文化、一緒に歩んで協力できる新しい人たち、そしてデザイナーが国境なんて気にしなくていい未来へ。" }
        },
        portfolio: {
            label: "厳選プロジェクト",
            title: "僕が<span class='highlight'>作ってきたもの</span>",
            intro: "これまで作ってきたものをいくつか紹介する。どれも、デザインとかコードとか、あるいは人について、何かを教えてくれた。",
            1: { stamp: "インパクト", title: "Think Fraud", summary: "5万人以上をネット詐欺から守る活動。", brief: "昔、人をネットで騙してお金を奪う方法を正確に知ってた。 earningsその過去は僕の汚点なんかじゃない。むしろそれがきっかけで、5万人以上をネット詐欺から守る活動につながったんだ。詐欺師がどう動くかを理解することだけが、それを止める唯一の方法だった。", tags: "詐欺対策 · コミュニティ · 教育", status: "ステータス:完了" },
            2: { stamp: "職人技", title: "Restaurant Cashier", summary: "ラーメン店でレジと帳簿を3年間担当。", brief: "3年間、監査みたいに一円単位で数え続けた。シフトに入るたびに、責任ってものを少しずつ学んでいった感じ。一円のズレもなく合わせることは、完璧主義とかじゃなくて、僕なりのちゃんとやってますっていう証明だった。", tags: "経理 · 信頼 · 接客業", status: "ステータス:完了" },
            3: { stamp: "こだわり", title: "Global Elite", summary: "才能とひたすらの練習で頂点へ。", brief: "マウスさえ握れればゲームができると思ってるなら、CS:GO(CS2)をやってみてほしい。その考え、絶対変わるから。必要なのは本物の才能と、山ほどの過酷な練習量。反射神経とひたすらの練習が、今の自分を作った。", tags: "戦術 · CS2 · Faceitレベル10", status: "ステータス:継続中" },
            4: { stamp: "架け橋", title: "Polyglot", summary: "4つの言語、無限のつながり。", brief: "海外生活7年以上、3ヶ国語をマスターして、今4つ目に挑戦中。僕にとって言語って、単なる単語の集まりじゃなくて、誰かの世界にお邪魔するための入り口みたいなものなんだ。", tags: "ベトナム語 · 日本語 · 英語 · ドイツ語", status: "ステータス:継続中" }
        },
        abilities: {
            label: "スキル",
            title: "解放された<span class='highlight'>能力</span>",
            cat1: "クラフト", skill1: "クリエイティブシンキング", skill2: "ストーリーテリング", skill3: "UI/UXデザイン", skill4: "写真", skill5: "映像編集",
            cat2: "ツール", skill6: "ウェブ開発", skill7: "リサーチ", skill8: "サイバーセキュリティ基礎",
            cat3: "言語",
            lang: { vi: "ベトナム語 (ネイティブ)", en: "英語 (堪能)", ja: "日本語 (堪能)" }
        },
        journal: {
            label: "シネマティックジャーナル",
            title: "人生の<span class='highlight'>フレーム</span>",
            prev: "前へ", next: "次へ",
            1: { desc: "2022年 · 東京で初めて雪景色を見た日。あ、自分もうよそ者じゃないんだなって、ふと思った。" },
            2: { desc: "2024年 · 深夜のデザイン作業。世界が静かになるほど、頭の中のアイデアはうるさくなる。" },
            3: { desc: "2023年 · 灯りの下の雨、夢を見るのをやめない街。" },
            4: { desc: "2024年 · 静かな時間。アイデアがだんだん形になっていく瞬間。" },
            5: { desc: "2023年 · 見知らぬ人の微笑み。それだけで、つながりってどこにもあるんだなって思わされる、ちゃんと見てれば。" },
            6: { desc: "2022年 · 夜に光る寺院。忙しない世界の中で、ふと訪れる静止の瞬間。" }
        },
        contact: {
            label: "連絡する",
            title: "<span class='highlight'>チャンネル</span>を開く",
            invite: "コラボでも、フリーランスの仕事でも、ただの雑談 settled, いつでも歓迎です。",
            form: { name: "名前", email: "メールアドレス", subject: "件名", message: "メッセージ", submit: "送信する", nameError: "お名前を入力してください", emailError: "有効なメールアドレスを入力してください", messageError: "メッセージを入力してください", success: "✓ 送信完了！なるべく早く返信します。" }
        },
        ending: { title: "セーブポイント", message: "物語はまだ続いてる。", continue: "続ける?", reflection: "ここまで一緒に歩いてくれてありがとう。もしどこかに自分自身の旅の影を見つけてくれたなら、ぜひ聞かせてほしい。一緒に次の章を書いていこう。", signature: "Ross より" },
        toast: { easterEgg: "✦ 秘密を発見:探検好きな性格、確定", gameOver: "💀 Game Over. Yキーでリスポーン。", respawn: "✦ リスポーン完了。探検を続けよう。", audioError: "⚠ 音声が利用できません" }
    }
};

// ============================================================
//  UTILITY HELPERS
// ============================================================
const $ = (s, c) => (c || document).querySelector(s);
const $$ = (s, c) => [...(c || document).querySelectorAll(s)];

function getT(lang, path) {
    const keys = path.split('.');
    let v = T[lang] || T.en;
    for (const k of keys) {
        if (v === undefined) return undefined;
        v = v[k];
    }
    return v;
}

let journalItemsData = [];

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n,
            t = getT(lang, key);
        if (t !== undefined) {
            if (typeof t === 'string' && t.includes('<')) el.innerHTML = t;
            else if (typeof t === 'string') el.textContent = t;
        }
    });

    const taglineEl = $('#heroTagline'),
        inviteEl = $('#heroInvite');
    const taglineText = getT(lang, 'hero.tagline'),
        inviteText = getT(lang, 'hero.invite');
    if (taglineEl && taglineText) {
        taglineEl.innerHTML = taglineText.split(' ').map((w, i) =>
            `<span style="display:inline-block;opacity:0;transform:translateY(16px);animation:heroWordIn .6s cubic-bezier(.22,.61,.36,1) ${.55 + i * .07}s forwards;">${w}</span>`
        ).join(' ');
    }
    if (inviteEl && inviteText) {
        inviteEl.innerHTML = inviteText.split(' ').map((w, i) =>
            `<span style="display:inline-block;opacity:0;transform:translateY(12px);animation:heroWordIn .5s cubic-bezier(.22,.61,.36,1) ${1.20 + i * .07}s forwards;">${w}</span>`
        ).join(' ');
    }

    const modal = $('#journalModal');
    if (modal && modal.classList.contains('active')) {
        const descEl = $('#journalModalDesc'),
            idx = window._journalCurrentIndex;
        if (idx !== undefined && journalItemsData[idx] && descEl) descEl.textContent = journalItemsData[idx].fullEl.textContent.trim();
    }

    document.title = {
        en: 'Ross Nguyen · Designer & Developer',
        vi: 'Ross Nguyen · Designer & Developer',
        ja: 'Ross Nguyen · Designer & Developer'
    }[lang] || 'Ross Nguyen · Designer & Developer';
    localStorage.setItem('lang', lang);
    if ($('#langSelect')) $('#langSelect').value = lang;
}

// ============================================================
//  REAL-TIME DAY / NIGHT LIGHTING
// ============================================================
function initDayNightLighting() {
    const hour = new Date().getHours();
    const isDaytime = hour >= 6 && hour < 18;
    if (isDaytime) {
        document.documentElement.classList.add('day-theme');
    } else {
        document.documentElement.classList.remove('day-theme');
    }
}

// ============================================================
//  DOMContentLoaded
// ============================================================
document.addEventListener('DOMContentLoaded', function() {

    initDayNightLighting();

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // ---- LOADING ----
    const placeholder = $('#loadingPlaceholder');
    if (placeholder) {
        setTimeout(() => placeholder.classList.add('hidden'), 400);
        setTimeout(() => { placeholder.style.display = 'none'; }, 1200);
    }

    // ---- LANGUAGE ----
    if ($('#langSelect')) {
        $('#langSelect').addEventListener('change', e => applyLanguage(e.target.value));
    }
    applyLanguage(localStorage.getItem('lang') || 'en');

    // ---- EMAIL ----
    const emailLink = $('#emailLink');
    if (emailLink) {
        emailLink.href = 'mailto:moonsicson@gmail.com';
        emailLink.textContent = 'moonsicson@gmail.com';
    }

    // ---- INTERSECTION OBSERVERS ----
    const ro = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
    }, { threshold: .10, rootMargin: '0px 0px -30px 0px' });
    $$('.section:not(.hero), .project-card, .journal-item, .ending, .profile__stat').forEach(el => ro.observe(el));

    const co = new IntersectionObserver(entries => {
        entries.forEach(e => e.target.classList.toggle('revealed', e.isIntersecting));
    }, { threshold: .18, rootMargin: '0px 0px -30px 0px' });
    $$('.chapter-item').forEach(el => co.observe(el));

    // ---- SCROLL HELPERS ----
    function scrollTo(target, offset = 60) {
        window.scrollTo({
            top: target.getBoundingClientRect().top + window.pageYOffset - offset,
            behavior: 'smooth'
        });
    }

    // ---- NAVIGATION ----
    const navToggle = $('#navToggle'),
        navLinks = $('#navLinks'),
        navClose = $('#navClose');

    function setMenu(open) {
        if (!navLinks || !navToggle) return;
        navLinks.classList.toggle('open', open);
        navToggle.classList.toggle('active', open);
        navToggle.setAttribute('aria-expanded', open);
        if (open) {
            const f = navLinks.querySelectorAll('a, button, [tabindex]');
            if (f.length) f[0].focus();
        } else navToggle.focus();
    }
    if (navToggle) navToggle.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
    if (navClose) navClose.addEventListener('click', () => setMenu(false));

    $$('.nav__links a[data-section]').forEach(a => a.addEventListener('click', e => {
        e.preventDefault();
        const t = document.getElementById(a.dataset.section);
        if (t) { scrollTo(t, 60); setMenu(false); }
    }));

    // ---- NAV SCROLL STATE ----
    const nav = $('#nav'),
        sectionEls = $$('section[id]');
    let navUpdatePending = false;

    function updateNav() {
        if (!nav) return;
        const y = window.pageYOffset;
        nav.classList.toggle('scrolled', y > 50);
        let cur = '';
        sectionEls.forEach(s => {
            if (y >= s.offsetTop - 100 && y < s.offsetTop + s.offsetHeight - 40) cur = s.id;
        });
        $$('.nav__links a[data-section]').forEach(a => {
            a.classList.toggle('active', a.dataset.section === cur);
            a.toggleAttribute('aria-current', a.dataset.section === cur);
        });
    }

    function updateNavRaf() {
        if (!navUpdatePending) {
            navUpdatePending = true;
            requestAnimationFrame(() => {
                updateNav();
                navUpdatePending = false;
            });
        }
    }

    window.addEventListener('scroll', updateNavRaf, { passive: true });
    updateNav();

    // ---- MOUSE LIGHT ----
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const mouseLight = $('#mouse-light');
    let mx = window.innerWidth / 2,
        my = window.innerHeight / 2,
        lx = mx,
        ly = my;
    if (!isTouch && mouseLight) {
        document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
        document.addEventListener('mouseleave', () => { if (mouseLight) mouseLight.style.opacity = '0'; }, { passive: true });
        document.addEventListener('mouseenter', () => { if (mouseLight) mouseLight.style.opacity = '1'; }, { passive: true });
    }

    // ---- PARALLAX ORBS ----
    const orbs = $$('.parallax-orb');
    const scrollProgress = $('#scrollProgress');

    // ============================================================
    //  CINEMATIC WEB AUDIO SFX
    // ============================================================
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioCtx = null;

    function playCinematicSound(freq = 120, type = 'sine', duration = 0.12) {
        try {
            if (!audioCtx) audioCtx = new AudioContext();
            if (audioCtx.state === 'suspended') audioCtx.resume();
            
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.type = type;
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(30, audioCtx.currentTime + duration);
            
            gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (_) {}
    }

    // Camera Shutter SFX
    function playShutterSound() {
        try {
            if (!audioCtx) audioCtx = new AudioContext();
            if (audioCtx.state === 'suspended') audioCtx.resume();
            
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(900, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.06);
            gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.06);
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.06);
        } catch (_) {}
    }

    function triggerShutterEffect() {
        playShutterSound();
        let shutter = $('.shutter-overlay');
        if (!shutter) {
            shutter = document.createElement('div');
            shutter.className = 'shutter-overlay';
            document.body.appendChild(shutter);
        }
        shutter.classList.remove('active');
        void shutter.offsetWidth; // trigger reflow
        shutter.classList.add('active');
    }

    $$('.hero__cta, .project-card, .chapter-item, .journal-item, .nav__links a, .contact__social-link').forEach(el => {
        el.addEventListener('mouseenter', () => playCinematicSound(150, 'sine', 0.08));
        el.addEventListener('click', () => playCinematicSound(220, 'triangle', 0.15));
    });

    // ============================================================
    //  3D TILT EFFECT
    // ============================================================
    if (!isTouch) {
        $$('.project-card, .hero__portrait').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                card.style.transform = `perspective(1000px) rotateX(${-y / 22}deg) rotateY(${x / 22}deg) translateY(-5px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            });
        });
    }

    // ============================================================
    //  DYNAMIC ATMOSPHERE SYSTEM (90 FPS - FIXED WEATHER BOUNDARY)
    // ============================================================
    (function initAtmosphere() {
    const canvas = $('#heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    let w, h, particles = [];
    let currentMode = 'rain';
    let chapter3TopCache = 0;

    // Tính chính xác vị trí tuyệt đối của Chapter 3 so với ĐẦU TRANG WEB
    function updateCache() {
        const chapters = $$('.chapter-item');
        if (chapters.length >= 3) {
            let el = chapters[2]; // Chapter 3
            let top = 0;
            while (el) {
                top += el.offsetTop;
                el = el.offsetParent;
            }
            chapter3TopCache = top;
        }
    }

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.scale(dpr, dpr);
        updateCache();
    }

    function Particle(mode) { this.reset(mode); }

    Particle.prototype.reset = function(mode) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        if (mode === 'rain') {
            this.r = Math.random() * 1.5 + 0.8;
            this.vx = -Math.random() * 0.5 - 0.2;
            this.vy = Math.random() * 8 + 6;
            this.length = Math.random() * 16 + 10;
            this.alpha = Math.random() * 0.28 + 0.15;
        } else {
            this.r = Math.random() * 2.2 + 1.0;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = Math.random() * 1.5 + 0.6;
            this.length = 0;
            this.alpha = Math.random() * 0.45 + 0.25;
        }
    };

    Particle.prototype.update = function(mode) {
        this.x += this.vx;
        this.y += this.vy;
        if (this.y > h + 15 || this.y < -15 || this.x > w + 15 || this.x < -15) {
            this.reset(mode);
            this.y = -10;
        }
    };

    Particle.prototype.draw = function(mode) {
        ctx.beginPath();
        if (mode === 'rain') {
            ctx.strokeStyle = `rgba(102, 192, 244, ${this.alpha})`;
            ctx.lineWidth = this.r;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.vx * 2, this.y + this.length);
            ctx.stroke();
        } else {
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(245, 247, 250, ${this.alpha})`;
            ctx.fill();
        }
    };

    function createParticles() {
        const isMobile = window.innerWidth < 768;
        const count = Math.floor((currentMode === 'rain' ? 70 : 55) * (isMobile ? 0.35 : 1));
        particles = Array.from({ length: count }, () => new Particle(currentMode));
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update(currentMode);
            particles[i].draw(currentMode);
        }
        requestAnimationFrame(animate);
    }

    function checkWeatherBoundary() {
        const scrollY = window.pageYOffset;
        // Chỉ đổi sang Tuyết khi cuộn gần tới vị trí thực sự của Chapter 3
        const targetMode = (chapter3TopCache && scrollY >= chapter3TopCache - 150) ? 'snow' : 'rain';
        if (targetMode !== currentMode) {
            currentMode = targetMode;
            createParticles();
        }
    }

    window.addEventListener('scroll', checkWeatherBoundary, { passive: true });
    window.addEventListener('resize', () => { resize(); createParticles(); }, { passive: true });

    resize();
    createParticles();
    animate();
    })();

    // ---- MAIN ANIMATION LOOP ----
    let scrollY = 0,
        frameId = null,
        lastTime = 0;
    let frameCount = 0;
    const UPDATE_INTERVAL = 2;

    function mainLoop(time) {
        frameId = requestAnimationFrame(mainLoop);
        lastTime = time;

        scrollY = window.pageYOffset;
        const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
        const frac = scrollY / maxScroll;
        if (scrollProgress) {
            scrollProgress.style.width = (frac * 100) + '%';
        }

        if (!isTouch && mouseLight) {
            lx += (mx - lx) * 0.06;
            ly += (my - ly) * 0.06;
            mouseLight.style.left = lx + 'px';
            mouseLight.style.top = ly + 'px';
            const edge = 40;
            const near = mx < edge || mx > window.innerWidth - edge || my < edge || my > window.innerHeight - edge;
            mouseLight.style.opacity = near ? '0.15' : '1';
        }

        frameCount++;
        if (frameCount % UPDATE_INTERVAL === 0) {
            if (orbs[0]) orbs[0].style.transform = `translate3d(${-25 + frac * 45}px,${-15 + frac * 70}px,0)`;
            if (orbs[1]) orbs[1].style.transform = `translate3d(${18 - frac * 35}px,${-50 + frac * 100}px,0)`;
            if (orbs[2]) orbs[2].style.transform = `translate3d(${-12 + frac * 28}px,${35 - frac * 85}px,0)`;

            const bg = $('#bgLighting');
            if (bg) {
                const p = Math.min(frac, 1);
                bg.style.opacity = 0.4 + p * 0.35;
                bg.style.background = `radial-gradient(ellipse at ${28 + p * 18}% ${18 - p * 10}%, rgba(212,163,115,${0.06 + p * 0.05}), transparent 58%)`;
            }
        }
    }
    lastTime = performance.now();
    frameId = requestAnimationFrame(mainLoop);

    // ---- CHAPTERS TIMELINE SVG ----
    const path = $('#chaptersPath'),
        container = $('#chaptersContainer'),
        svg = $('#chaptersSVG');
    let timelineUpdatePending = false;

    function updateTimeline() {
        if (!path || !container || !svg) return;
        const h = container.scrollHeight;
        svg.setAttribute('viewBox', `0 0 2 ${h}`);
        svg.setAttribute('height', h);
        path.setAttribute('d', `M1,0 L1,${h}`);
        const len = path.getTotalLength();
        path.style.strokeDasharray = len;
        path.style.strokeDashoffset = len;
    }
    updateTimeline();
    window.addEventListener('resize', updateTimeline, { passive: true });

    function drawTimeline() {
        if (!path || !container) return;
        const y = window.pageYOffset,
            top = container.offsetTop,
            h = container.scrollHeight,
            bottom = y + window.innerHeight;
        if (bottom > top && y < top + h) {
            const progress = (bottom - top) / (h + window.innerHeight);
            path.style.strokeDashoffset = path.getTotalLength() * (1 - Math.min(progress, 1));
        }
    }

    function drawTimelineRaf() {
        if (!timelineUpdatePending) {
            timelineUpdatePending = true;
            requestAnimationFrame(() => {
                drawTimeline();
                timelineUpdatePending = false;
            });
        }
    }
    window.addEventListener('scroll', drawTimelineRaf, { passive: true });

    // ============================================================
    //  MUSIC PLAYER & AUDIO CONTROL
    // ============================================================
    const musicPlayer = $('#musicPlayer');
    const playBtn = $('#musicToggle');
    const audio = $('#bgMusic');
    const progressWrap = $('#progressWrap');
    const progressBar = $('#progressBar');
    const progressThumb = $('#progressThumb');
    const currentTimeEl = $('#currentTime');
    const totalTimeEl = $('#totalTime');
    const volumeToggle = $('#volumeToggle');
    const volumeFill = $('#volumeFill');
    const volumeTrack = $('#volumeTrack');
    const visualizerCanvas = $('#visualizerCanvas');
    let ctxVis = null;
    let visualizerId = null;
    let isPlaying = false;
    let audioErr = false;
    let volumeBeforeMute = 0.8;
    let currentVolume = 0.8;

    if (visualizerCanvas) {
        ctxVis = visualizerCanvas.getContext('2d');
        const resizeVis = () => {
            const rect = visualizerCanvas.getBoundingClientRect();
            visualizerCanvas.width = rect.width || 120;
            visualizerCanvas.height = rect.height || 30;
        };
        resizeVis();
        window.addEventListener('resize', resizeVis);
    }

    function hideMusic() { if (musicPlayer) musicPlayer.classList.add('hidden'); }

    function showToast(key) {
        const lang = localStorage.getItem('lang') || 'en';
        const msg = getT(lang, 'toast.' + key) || T.en.toast[key] || key;
        const t = $('#toast');
        if (t) {
            t.textContent = msg;
            t.classList.add('show');
            setTimeout(() => t.classList.remove('show'), 2200);
        }
    }

    if (audio) {
        audio.addEventListener('error', () => { audioErr = true; hideMusic(); showToast('audioError'); });
        audio.addEventListener('loadedmetadata', () => {
            if (audio.duration && totalTimeEl) totalTimeEl.textContent = formatTime(audio.duration);
        });
        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('play', () => { isPlaying = true; updatePlayIcon(true); startVisualizer(); });
        audio.addEventListener('pause', () => { isPlaying = false; updatePlayIcon(false); stopVisualizer(); });
        audio.addEventListener('ended', () => { isPlaying = false; updatePlayIcon(false); stopVisualizer(); });
    }

    function formatTime(sec) {
        if (!sec || isNaN(sec)) return '0:00';
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s.toString().padStart(2, '0')}`;
    }

    function updateProgress() {
        if (!audio || !audio.duration) return;
        const pct = (audio.currentTime / audio.duration) * 100;
        if (progressBar) progressBar.style.width = pct + '%';
        if (progressThumb) progressThumb.style.left = pct + '%';
        if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
        if (totalTimeEl && audio.duration) totalTimeEl.textContent = formatTime(audio.duration);
        if (progressWrap) progressWrap.setAttribute('aria-valuenow', Math.round(pct));
    }

    function updatePlayIcon(playing) {
        if (!playBtn) return;
        const playIcon = playBtn.querySelector('.play-icon');
        const pauseIcons = playBtn.querySelectorAll('.pause-icon');
        if (playing) {
            if (playIcon) playIcon.style.display = 'none';
            pauseIcons.forEach(el => el.style.display = 'block');
        } else {
            if (playIcon) playIcon.style.display = 'block';
            pauseIcons.forEach(el => el.style.display = 'none');
        }
    }

    if (playBtn) {
        playBtn.addEventListener('click', () => {
            if (audioErr || !audio) return;
            if (audio.paused) {
                audio.play().catch(() => { audioErr = true; hideMusic(); showToast('audioError'); });
            } else {
                audio.pause();
            }
        });
    }

    let isDragging = false;
    if (progressWrap) {
        progressWrap.addEventListener('mousedown', (e) => {
            if (!audio || !audio.duration) return;
            isDragging = true;
            setProgress(e.clientX);
        });
        document.addEventListener('mousemove', (e) => {
            if (isDragging) setProgress(e.clientX);
        });
        document.addEventListener('mouseup', () => { isDragging = false; });
        progressWrap.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (!audio || !audio.duration) return;
            isDragging = true;
            setProgress(e.touches[0].clientX);
        });
        document.addEventListener('touchmove', (e) => {
            if (isDragging) { e.preventDefault(); setProgress(e.touches[0].clientX); }
        });
        document.addEventListener('touchend', () => { isDragging = false; });
    }

    function setProgress(clientX) {
        if (!progressWrap || !audio) return;
        const rect = progressWrap.getBoundingClientRect();
        let pct = (clientX - rect.left) / rect.width;
        pct = Math.max(0, Math.min(1, pct));
        audio.currentTime = pct * audio.duration;
        updateProgress();
    }

    let volDragging = false;
    if (volumeToggle && audio) {
        volumeToggle.addEventListener('click', () => {
            if (audio.muted) {
                audio.muted = false;
                audio.volume = volumeBeforeMute;
                currentVolume = volumeBeforeMute;
                updateVolumeFill(volumeBeforeMute);
            } else {
                volumeBeforeMute = audio.volume || currentVolume;
                audio.muted = true;
                audio.volume = 0;
                currentVolume = 0;
                updateVolumeFill(0);
            }
        });
    }

    if (volumeTrack) {
        volumeTrack.addEventListener('mousedown', (e) => {
            volDragging = true;
            setVolume(e.clientX);
        });
        document.addEventListener('mousemove', (e) => {
            if (volDragging) setVolume(e.clientX);
        });
        document.addEventListener('mouseup', () => { volDragging = false; });
        volumeTrack.addEventListener('touchstart', (e) => {
            e.preventDefault();
            volDragging = true;
            setVolume(e.touches[0].clientX);
        });
        document.addEventListener('touchmove', (e) => {
            if (volDragging) { e.preventDefault(); setVolume(e.touches[0].clientX); }
        });
        document.addEventListener('touchend', () => { volDragging = false; });
    }

    function setVolume(clientX) {
        if (!volumeTrack || !audio) return;
        const rect = volumeTrack.getBoundingClientRect();
        let pct = (clientX - rect.left) / rect.width;
        pct = Math.max(0, Math.min(1, pct));
        audio.volume = pct;
        currentVolume = pct;
        if (pct === 0) { audio.muted = true; } else { audio.muted = false; }
        updateVolumeFill(pct);
    }

    function updateVolumeFill(pct) {
        if (volumeFill) volumeFill.style.width = (pct * 100) + '%';
    }

    function startVisualizer() {
        if (!ctxVis) return;
        stopVisualizer();
        const w = visualizerCanvas.width,
            h = visualizerCanvas.height;
        const bars = 24;
        const barWidth = w / bars;
        const maxHeight = h * 0.8;
        let time = 0;

        function draw() {
            if (!isPlaying) { stopVisualizer(); return; }
            ctxVis.clearRect(0, 0, w, h);
            time += 0.05;
            for (let i = 0; i < bars; i++) {
                const val = Math.sin(i * 0.5 + time * 1.8) * 0.6 + 0.4;
                const height = maxHeight * val * 0.7 + maxHeight * 0.2 * Math.sin(i * 0.3 + time * 2.1) * 0.3 + maxHeight * 0.2;
                const x = i * barWidth + (barWidth - 2) / 2;
                const y = h - height;
                const gradient = ctxVis.createLinearGradient(0, y, 0, h);
                gradient.addColorStop(0, '#66c0f4');
                gradient.addColorStop(1, '#f4a261');
                ctxVis.fillStyle = gradient;
                ctxVis.fillRect(x, y, 2, height);
            }
            visualizerId = requestAnimationFrame(draw);
        }
        draw();
    }

    function stopVisualizer() {
        if (visualizerId) { cancelAnimationFrame(visualizerId); visualizerId = null; }
        if (ctxVis) ctxVis.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
    }

    document.addEventListener('keydown', (e) => {
        if (e.target.matches('input, textarea, select')) return;
        if (e.key === ' ' || e.key === 'Space') {
            e.preventDefault();
            if (playBtn) playBtn.click();
        }
    });

    // ============================================================
    //  PROJECT CARDS
    // ============================================================
    $$('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const expanded = this.classList.toggle('expanded');
            this.setAttribute('aria-expanded', expanded);
            const live = this.querySelector('.project-card__status-live');
            if (live) live.textContent = expanded ? 'Details expanded' : 'Collapsed';
        });
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
        });
    });

    // ============================================================
    //  JOURNAL MODAL WITH CAMERA SHUTTER EFFECT
    // ============================================================
    const modal = $('#journalModal'),
        modalImg = $('#journalModalImg'),
        modalDesc = $('#journalModalDesc'),
        modalClose = $('#journalModalClose'),
        modalPrev = $('#journalModalPrev'),
        modalNext = $('#journalModalNext');
    let currentIndex = 0;
    const journalItems = $$('.journal-item');
    journalItemsData = journalItems.map((item) => {
        const img = item.querySelector('img'),
            full = item.querySelector('.journal-item__full');
        return img && full ? { src: img.src, alt: img.alt || '', fullEl: full } : null;
    }).filter(Boolean);

    journalItems.forEach((item, i) => {
        item.addEventListener('click', () => openModal(i));
        item.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); }
        });
    });

    function openModal(index) {
        if (!modal || !modalImg || !modalDesc) return;
        triggerShutterEffect();
        if (index < 0) index = journalItemsData.length - 1;
        if (index >= journalItemsData.length) index = 0;
        currentIndex = index;
        window._journalCurrentIndex = currentIndex;
        const data = journalItemsData[currentIndex];
        if (data) {
            modalImg.src = data.src;
            modalImg.alt = data.alt;
            modalDesc.textContent = data.fullEl.textContent.trim();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (modalClose) setTimeout(() => modalClose.focus(), 100);
        }
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (journalItems[currentIndex]) journalItems[currentIndex].focus();
    }
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    if (modalPrev) modalPrev.addEventListener('click', () => openModal(currentIndex - 1));
    if (modalNext) modalNext.addEventListener('click', () => openModal(currentIndex + 1));
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft' && modal && modal.classList.contains('active')) { e.preventDefault(); openModal(currentIndex - 1); }
        if (e.key === 'ArrowRight' && modal && modal.classList.contains('active')) { e.preventDefault(); openModal(currentIndex + 1); }
    });

    // ============================================================
    //  CONTACT FORM
    // ============================================================
    const form = $('#contactForm'),
        formSuccess = $('#formSuccess');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let valid = true;
            const name = $('#contactName'),
                email = $('#contactEmail'),
                subject = $('#contactSubject'),
                message = $('#contactMessage');
            const nameErr = name.parentElement.querySelector('.contact__form-error');
            const emailErr = email.parentElement.querySelector('.contact__form-error');
            const msgErr = message.parentElement.querySelector('.contact__form-error');
            [nameErr, emailErr, msgErr].forEach(el => el.classList.remove('show'));
            if (!name.value.trim()) { nameErr.classList.add('show'); valid = false; }
            if (!email.value.trim() || !email.value.includes('@')) { emailErr.classList.add('show'); valid = false; }
            if (!message.value.trim()) { msgErr.classList.add('show'); valid = false; }
            if (valid) {
                const to = 'moonsicson@gmail.com';
                const subjectText = subject.value.trim() || 'Message from Ross Nguyen profile';
                const body = `\n\n\nFrom: ${name.value} (${email.value})\nSent: ${new Date().toLocaleString()}\n\n${message.value}\n\n-- \n`;
                window.location.href = `mailto:${to}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(body)}`;
                if (formSuccess) formSuccess.classList.add('show');
                form.reset();
                setTimeout(() => { if (formSuccess) formSuccess.classList.remove('show'); }, 4000);
            }
        });
    }

    // ---- FOOTER YEAR ----
    const yearEl = $('#footerYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ---- CONTINUE BUTTON ----
    const continueBtn = $('#continueBtn');
    if (continueBtn) continueBtn.addEventListener('click', () => scrollTo($('#hero'), 60));

    // ---- EASTER EGGS ----
    document.addEventListener('keydown', e => {
        if (e.target.matches('input, textarea, select')) return;
        const t = e.key;
        if (t === 'e' || t === 'E') showToast('easterEgg');
        else if (t === 'n' || t === 'N') {
            showToast('gameOver');
            const f = $('.ending');
            if (f) scrollTo(f, 60);
        } else if (t === 'y' || t === 'Y') {
            scrollTo($('#hero'), 60);
            showToast('respawn');
        }
    });

    // ---- VISIBILITY CHANGE ----
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (frameId) { cancelAnimationFrame(frameId); frameId = null; }
        } else {
            if (!frameId) { lastTime = performance.now(); frameId = requestAnimationFrame(mainLoop); }
        }
    });

    // ============================================================
    //  SITE VERIFICATION SYSTEM
    // ============================================================
    window.verifySite = function() {
        const results = [];
        const check = (name, fn) => {
            try {
                const ok = !!fn();
                results.push({ name, ok });
                if (!ok) console.warn(`[verify] ✗ ${name}`);
            } catch (e) {
                results.push({ name, ok: false, error: e.message });
            }
        };

        check('Critical DOM elements', () =>
            ['loadingPlaceholder','navToggle','navLinks','langSelect','heroCanvas','chaptersPath','musicPlayer','musicToggle','bgMusic','contactForm','footerYear','continueBtn','scrollProgress']
                .every(id => document.getElementById(id))
        );

        check('Translation data', () =>
            typeof T === 'object' && T.en && T.vi && T.ja && T.en.nav && T.vi.nav && T.ja.nav
        );

        check('Navigation structure', () =>
            !!$('#navToggle') && !!$('#navLinks') && $$('.nav__links a[data-section]').length === 6
        );

        check('Project cards present', () =>
            $$('.project-card').length === 4
        );

        check('Journal modal elements present', () =>
            !!$('.journal-item') && !!$('#journalModal') && !!$('#journalModalClose') && !!$('#journalModalImg')
        );

        console.groupCollapsed('%cSite Verification', 'color:#f4a261;font-weight:bold;');
        results.forEach(r => {
            console.log(`${r.ok ? '✅' : '⚠️'} ${r.name}${r.error ? ' — ' + r.error : ''}`);
        });
        console.groupEnd();

        return results;
    };
});
