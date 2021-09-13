const types = {
    group: "GROUP",
    groupIcon: `<i class="fas fa-users"></i>`,
    channel: "CHANNEL",
    channelIcon: `<i class="fas fa-bullhorn"></i>`,
    user: "USER",
    userIcon: `<i class="fas fa-user"></i>`,
};

let data = [
    {
        img: "./images/ava.jpg",
        type: types.group,
        name: "PDP g92",
        time: "19:50",
        unreadMsgCount: 167,
        chat: [
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
            { who: ":)", msg: "Ustozga bugun boramiman darsga", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: ":)", msg: "Mazam bo'mayapti", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: "Sardor", msg: "Manda bitta muammo bor", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Sardor", msg: "Uy ishi qilganlar bormi? Uy ishi qilganlar bormi? Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
            { who: ":)", msg: "Ustozga bugun boramiman darsga", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: ":)", msg: "Mazam bo'mayapti", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: "Sardor", msg: "Manda bitta muammo bor", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Sardor", msg: "Uy ishi qilganlar bormi? Uy ishi qilganlar bormi? Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
        ],
    },
    {
        img: "https://anime-fans.ru/wp-content/uploads/2021/03/Magicheskaya-bitva-itadori-prikolnye-kartinki_01.jpg",
        type: types.group,
        name: "PDP g93",
        time: "19:45",
        unreadMsgCount: 4,
        chat: [
            { who: "Javlon", msg: "Uzr kech qolaman", image: "https://99px.ru/sstorage/53/2016/07/tmb_173036_6247.jpg" },
            { who: "Sardor", msg: "Uy ishiga yordam bervoringlar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfdTvyQdfKgPxLnRrMIYVA4miDj4PjWSV4A&usqp=CAU" },
        ],
    },
    {
        img: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg",
        type: types.user,
        name: "Malika",
        time: "19:45",
        unreadMsgCount: 7,
        chat: [
            { who: "Shavkat", msg: "Salom", image: "data:image/jpeg;base64,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" },
            { who: "Diyora", msg: "Qalesla", image: "https://avatars.mds.yandex.net/get-zen_doc/1901671/pub_5e4775d7004f583c8ffd9b25_5e4b7df85bdc2e1b307d4cf9/scale_1200" },
            { who: ":)", msg: "Ustozga bugun boramiman darsga", image: "https://images2.alphacoders.com/108/thumb-1920-1082121.jpg" },
            { who: ":)", msg: "Mazam bo'mayapti", image: "https://images2.alphacoders.com/108/thumb-1920-1082121.jpg" },
            { who: "Sardor", msg: "Manda bitta muammo bor", image: "https://images5.alphacoders.com/951/thumb-1920-951011.png" },
            { who: "Sardor", msg: "Uy ishi qilganlar bormi? Uy ishi qilganlar bormi? Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?", image: "https://images5.alphacoders.com/951/thumb-1920-951011.png" },
        ],
    },
    {
        img: "./images/ava.jpg",
        type: types.channel,
        name: "PDP g92",
        time: "19:50",
        unreadMsgCount: 167,
        chat: [
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
            { who: ":)", msg: "Ustozga bugun boramiman darsga", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: ":)", msg: "Mazam bo'mayapti", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: "Sardor", msg: "Manda bitta muammo bor", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Sardor", msg: "Uy ishi qilganlar bormi? Uy ishi qilganlar bormi? Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
            { who: ":)", msg: "Ustozga bugun boramiman darsga", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: ":)", msg: "Mazam bo'mayapti", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: "Sardor", msg: "Manda bitta muammo bor", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Sardor", msg: "Uy ishi qilganlar bormi? Uy ishi qilganlar bormi? Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
        ],
    },
    {
        img: "https://anime-fans.ru/wp-content/uploads/2021/03/Magicheskaya-bitva-itadori-prikolnye-kartinki_01.jpg",
        type: types.channel,
        name: "PDP g93",
        time: "19:45",
        unreadMsgCount: 4,
        chat: [
            { who: "Javlon", msg: "Uzr kech qolaman", image: "https://99px.ru/sstorage/53/2016/07/tmb_173036_6247.jpg" },
            { who: "Sardor", msg: "Uy ishiga yordam bervoringlar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfdTvyQdfKgPxLnRrMIYVA4miDj4PjWSV4A&usqp=CAU" },
        ],
    },
    {
        img: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg",
        type: types.user,
        name: "Malika",
        time: "19:45",
        unreadMsgCount: 7,
        chat: [
            { who: "Shavkat", msg: "Salom", image: "data:image/jpeg;base64,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" },
            { who: "Diyora", msg: "Qalesla", image: "https://avatars.mds.yandex.net/get-zen_doc/1901671/pub_5e4775d7004f583c8ffd9b25_5e4b7df85bdc2e1b307d4cf9/scale_1200" },
            { who: ":)", msg: "Ustozga bugun boramiman darsga", image: "https://images2.alphacoders.com/108/thumb-1920-1082121.jpg" },
            { who: ":)", msg: "Mazam bo'mayapti", image: "https://images2.alphacoders.com/108/thumb-1920-1082121.jpg" },
            { who: "Sardor", msg: "Manda bitta muammo bor", image: "https://images5.alphacoders.com/951/thumb-1920-951011.png" },
            { who: "Sardor", msg: "Uy ishi qilganlar bormi? Uy ishi qilganlar bormi? Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?", image: "https://images5.alphacoders.com/951/thumb-1920-951011.png" },
        ],
    },
    {
        img: "./images/ava.jpg",
        type: types.group,
        name: "PDP g92",
        time: "19:50",
        unreadMsgCount: 167,
        chat: [
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
            { who: ":)", msg: "Ustozga bugun boramiman darsga", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: ":)", msg: "Mazam bo'mayapti", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: "Sardor", msg: "Manda bitta muammo bor", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Sardor", msg: "Uy ishi qilganlar bormi? Uy ishi qilganlar bormi? Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
            { who: ":)", msg: "Ustozga bugun boramiman darsga", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: ":)", msg: "Mazam bo'mayapti", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: "Sardor", msg: "Manda bitta muammo bor", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Sardor", msg: "Uy ishi qilganlar bormi? Uy ishi qilganlar bormi? Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
        ],
    },
    {
        img: "https://anime-fans.ru/wp-content/uploads/2021/03/Magicheskaya-bitva-itadori-prikolnye-kartinki_01.jpg",
        type: types.group,
        name: "PDP g93",
        time: "19:45",
        unreadMsgCount: 4,
        chat: [
            { who: "Javlon", msg: "Uzr kech qolaman", image: "https://99px.ru/sstorage/53/2016/07/tmb_173036_6247.jpg" },
            { who: "Sardor", msg: "Uy ishiga yordam bervoringlar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfdTvyQdfKgPxLnRrMIYVA4miDj4PjWSV4A&usqp=CAU" },
        ],
    },
    {
        img: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg",
        type: types.user,
        name: "Malika",
        time: "19:45",
        unreadMsgCount: 7,
        chat: [
            { who: "Shavkat", msg: "Salom", image: "data:image/jpeg;base64,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" },
            { who: "Diyora", msg: "Qalesla", image: "https://avatars.mds.yandex.net/get-zen_doc/1901671/pub_5e4775d7004f583c8ffd9b25_5e4b7df85bdc2e1b307d4cf9/scale_1200" },
            { who: ":)", msg: "Ustozga bugun boramiman darsga", image: "https://images2.alphacoders.com/108/thumb-1920-1082121.jpg" },
            { who: ":)", msg: "Mazam bo'mayapti", image: "https://images2.alphacoders.com/108/thumb-1920-1082121.jpg" },
            { who: "Sardor", msg: "Manda bitta muammo bor", image: "https://images5.alphacoders.com/951/thumb-1920-951011.png" },
            { who: "Sardor", msg: "Uy ishi qilganlar bormi? Uy ishi qilganlar bormi? Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?", image: "https://images5.alphacoders.com/951/thumb-1920-951011.png" },
        ],
    },
    {
        img: "./images/ava.jpg",
        type: types.group,
        name: "PDP g92",
        time: "19:50",
        unreadMsgCount: 167,
        chat: [
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
            { who: ":)", msg: "Ustozga bugun boramiman darsga", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: ":)", msg: "Mazam bo'mayapti", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: "Sardor", msg: "Manda bitta muammo bor", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Sardor", msg: "Uy ishi qilganlar bormi? Uy ishi qilganlar bormi? Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
            { who: ":)", msg: "Ustozga bugun boramiman darsga", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: ":)", msg: "Mazam bo'mayapti", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: "Sardor", msg: "Manda bitta muammo bor", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Sardor", msg: "Uy ishi qilganlar bormi? Uy ishi qilganlar bormi? Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
        ],
    },
    {
        img: "https://anime-fans.ru/wp-content/uploads/2021/03/Magicheskaya-bitva-itadori-prikolnye-kartinki_01.jpg",
        type: types.group,
        name: "PDP g93",
        time: "19:45",
        unreadMsgCount: 4,
        chat: [
            { who: "Javlon", msg: "Uzr kech qolaman", image: "https://99px.ru/sstorage/53/2016/07/tmb_173036_6247.jpg" },
            { who: "Sardor", msg: "Uy ishiga yordam bervoringlar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfdTvyQdfKgPxLnRrMIYVA4miDj4PjWSV4A&usqp=CAU" },
        ],
    },
    {
        img: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg",
        type: types.user,
        name: "Malika",
        time: "19:45",
        unreadMsgCount: 7,
        chat: [
            { who: "Shavkat", msg: "Salom", image: "data:image/jpeg;base64,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" },
            { who: "Diyora", msg: "Qalesla", image: "https://avatars.mds.yandex.net/get-zen_doc/1901671/pub_5e4775d7004f583c8ffd9b25_5e4b7df85bdc2e1b307d4cf9/scale_1200" },
            { who: ":)", msg: "Ustozga bugun boramiman darsga", image: "https://images2.alphacoders.com/108/thumb-1920-1082121.jpg" },
            { who: ":)", msg: "Mazam bo'mayapti", image: "https://images2.alphacoders.com/108/thumb-1920-1082121.jpg" },
            { who: "Sardor", msg: "Manda bitta muammo bor", image: "https://images5.alphacoders.com/951/thumb-1920-951011.png" },
            { who: "Sardor", msg: "Uy ishi qilganlar bormi? Uy ishi qilganlar bormi? Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?", image: "https://images5.alphacoders.com/951/thumb-1920-951011.png" },
        ],
    },
    {
        img: "./images/ava.jpg",
        type: types.group,
        name: "PDP g92",
        time: "19:50",
        unreadMsgCount: 167,
        chat: [
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
            { who: ":)", msg: "Ustozga bugun boramiman darsga", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: ":)", msg: "Mazam bo'mayapti", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: "Sardor", msg: "Manda bitta muammo bor", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Sardor", msg: "Uy ishi qilganlar bormi? Uy ishi qilganlar bormi? Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
            { who: ":)", msg: "Ustozga bugun boramiman darsga", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: ":)", msg: "Mazam bo'mayapti", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: "Sardor", msg: "Manda bitta muammo bor", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Sardor", msg: "Uy ishi qilganlar bormi? Uy ishi qilganlar bormi? Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
        ],
    },
    {
        img: "https://anime-fans.ru/wp-content/uploads/2021/03/Magicheskaya-bitva-itadori-prikolnye-kartinki_01.jpg",
        type: types.group,
        name: "PDP g93",
        time: "19:45",
        unreadMsgCount: 4,
        chat: [
            { who: "Javlon", msg: "Uzr kech qolaman", image: "https://99px.ru/sstorage/53/2016/07/tmb_173036_6247.jpg" },
            { who: "Sardor", msg: "Uy ishiga yordam bervoringlar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfdTvyQdfKgPxLnRrMIYVA4miDj4PjWSV4A&usqp=CAU" },
        ],
    },
    {
        img: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg",
        type: types.user,
        name: "Malika",
        time: "19:45",
        unreadMsgCount: 7,
        chat: [
            { who: "Shavkat", msg: "Salom", image: "data:image/jpeg;base64,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" },
            { who: "Diyora", msg: "Qalesla", image: "https://avatars.mds.yandex.net/get-zen_doc/1901671/pub_5e4775d7004f583c8ffd9b25_5e4b7df85bdc2e1b307d4cf9/scale_1200" },
            { who: ":)", msg: "Ustozga bugun boramiman darsga", image: "https://images2.alphacoders.com/108/thumb-1920-1082121.jpg" },
            { who: ":)", msg: "Mazam bo'mayapti", image: "https://images2.alphacoders.com/108/thumb-1920-1082121.jpg" },
            { who: "Sardor", msg: "Manda bitta muammo bor", image: "https://images5.alphacoders.com/951/thumb-1920-951011.png" },
            { who: "Sardor", msg: "Uy ishi qilganlar bormi? Uy ishi qilganlar bormi? Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?", image: "https://images5.alphacoders.com/951/thumb-1920-951011.png" },
        ],
    },
    {
        img: "./images/ava.jpg",
        type: types.group,
        name: "PDP g92",
        time: "19:50",
        unreadMsgCount: 167,
        chat: [
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
            { who: ":)", msg: "Ustozga bugun boramiman darsga", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: ":)", msg: "Mazam bo'mayapti", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: "Sardor", msg: "Manda bitta muammo bor", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Sardor", msg: "Uy ishi qilganlar bormi? Uy ishi qilganlar bormi? Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
            { who: ":)", msg: "Ustozga bugun boramiman darsga", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: ":)", msg: "Mazam bo'mayapti", image: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5de57c14a660d700aeceedd1_5de57cf33642b600afe5273c/scale_1200" },
            { who: "Sardor", msg: "Manda bitta muammo bor", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Sardor", msg: "Uy ishi qilganlar bormi? Uy ishi qilganlar bormi? Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?", image: "https://images4.alphacoders.com/110/1101591.jpg" },
            { who: "Shavkat", msg: "Salom", image: "https://vsthemes.org/uploads/posts/2020-01/1580282413_vsthemes_ru-2.jpg" },
            { who: "Madina", msg: "Qalesla", image: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg" },
        ],
    },
    {
        img: "https://anime-fans.ru/wp-content/uploads/2021/03/Magicheskaya-bitva-itadori-prikolnye-kartinki_01.jpg",
        type: types.group,
        name: "PDP g93",
        time: "19:45",
        unreadMsgCount: 4,
        chat: [
            { who: "Javlon", msg: "Uzr kech qolaman", image: "https://99px.ru/sstorage/53/2016/07/tmb_173036_6247.jpg" },
            { who: "Sardor", msg: "Uy ishiga yordam bervoringlar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfdTvyQdfKgPxLnRrMIYVA4miDj4PjWSV4A&usqp=CAU" },
        ],
    },
    {
        img: "https://99px.ru/sstorage/53/2020/09/tmb_315791_257152.jpg",
        type: types.user,
        name: "Malika",
        time: "19:45",
        unreadMsgCount: 7,
        chat: [
            { who: "Shavkat", msg: "Salom", image: "data:image/jpeg;base64,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" },
            { who: "Diyora", msg: "Qalesla", image: "https://avatars.mds.yandex.net/get-zen_doc/1901671/pub_5e4775d7004f583c8ffd9b25_5e4b7df85bdc2e1b307d4cf9/scale_1200" },
            { who: ":)", msg: "Ustozga bugun boramiman darsga", image: "https://images2.alphacoders.com/108/thumb-1920-1082121.jpg" },
            { who: ":)", msg: "Mazam bo'mayapti", image: "https://images2.alphacoders.com/108/thumb-1920-1082121.jpg" },
            { who: "Sardor", msg: "Manda bitta muammo bor", image: "https://images5.alphacoders.com/951/thumb-1920-951011.png" },
            { who: "Sardor", msg: "Uy ishi qilganlar bormi? Uy ishi qilganlar bormi? Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?Uy ishi qilganlar bormi?", image: "https://images5.alphacoders.com/951/thumb-1920-951011.png" },
        ],
    },
];

const getIcon = (type) => {
    return types[type.toLowerCase() + "Icon"];
};

const getShortText = (str) => {
    if (str.length > 75) return str.slice(0, 72) + "...";
    else return str;
};

const getMsg = (contact) => {
    let sendMsg = document.getElementById("sendMsg").value;
    let f = {
        who: "M.X", msg: sendMsg, image: "https://i.pinimg.com/736x/12/14/7d/12147de809d9e8a8101b050cc02da9a5.jpg",
    }
    contact.chat.push(f);
    console.log(contact);

    chatBlock.innerHTML = `
        <div class="bg-white send p-0 d-flex align-items-center">
            <button class="btn py-2 px-3">
                <i class="fas fa-paperclip fs-4"></i>
            </button>
            <div class="text-block py-2">
                <textarea placeholder="Написать сообщение" class="border-0 w-100" id="sendMsg"></textarea>
            </div>
            <button class="btn py-2 px-3" id="sendMsgButton">
                <i class="fab fa-telegram-plane fs-4 text-primary"></i>
            </button>
            <button class="btn py-2 px-3">
                <i class="far fa-smile fs-4"></i>
            </button>
            <button class="btn py-2 px-3">
                <i class="fas fa-microphone fs-4"></i>
            </button>
        </div>
    `;

    contact.chat.map((ms, ind) => {
        const n = document.createElement("div");
        if (ms.who == "M.X") {
            n.className = `d-flex align-items-end my-2 flex-row-reverse`;
        } else {
            n.className = `d-flex align-items-end my-2`;
        }
        n.innerHTML = `
            <div class="rounded-circle av-box mx-3">
                <img src="${ms.image}" alt="?">
            </div>
            <div class="bg-white p-3 msg">
                <p class="text-primary m-0">${ms.who}</p>
                <p class="m-0">${ms.msg}</p>
            </div>
      `;

        chatBlock.appendChild(n);
    });

};


const chatBlock = document.getElementById("chatBlock");
chatBlock.className = "chat py-3 px-2";
chatBlock.innerHTML = `
    <div class="py-1 px-3 start">
        <small class="text-white m-0">Выберите, кому хотели бы написать</small>
    </div>
`;
const setChat = (contact) => {
    chatBlock.innerHTML = `
        <div class="bg-white send p-0 d-flex align-items-center">
            <button class="btn py-2 px-3">
                <i class="fas fa-paperclip fs-4"></i>
            </button>
            <div class="text-block py-2">
                <textarea placeholder="Написать сообщение" class="border-0 w-100" id="sendMsg"></textarea>
            </div>
            <button class="btn py-2 px-3" id="sendMsgButton">
                <i class="fab fa-telegram-plane fs-4 text-primary"></i>
            </button>
            <button class="btn py-2 px-3">
                <i class="far fa-smile fs-4"></i>
            </button>
            <button class="btn py-2 px-3">
                <i class="fas fa-microphone fs-4"></i>
            </button>
        </div>
    `;

    contact.chat.map((ms, ind) => {
        const n = document.createElement("div");
        if (ms.who == "M.X") {
            n.className = `d-flex align-items-end my-2 flex-row-reverse`;
        } else {
            n.className = `d-flex align-items-end my-2`;
        }
        n.innerHTML = `
            <div class="rounded-circle av-box mx-3">
                <img src="${ms.image}" alt="?">
            </div>
            <div class="bg-white p-3 msg">
                <p class="text-primary m-0">${ms.who}</p>
                <p class="m-0">${ms.msg}</p>
            </div>
      `;

        chatBlock.appendChild(n);
    });
    const sendMsgButton = document.getElementById("sendMsgButton");
    sendMsgButton.onclick = () => {
        getMsg(contact);
    };
    const chatName = document.getElementById("chatName");
    const o = document.getElementById("o");
    o.className = "d-flex align-items-center justify-content-between chat-name border-bottom px-3";
    chatName.innerHTML = contact.name;
};

const container = document.getElementById("contacts");

container.innerHTML = "";

data.map((contact, index) => {
    const a = document.createElement("a");
    a.href = "#";

    // onclick hodisasi, chat almashadigan joy
    a.onclick = () => {
        setChat(contact);
    };

    a.className = `list-group-item list-group-item-action d-flex align-items-center p-2 border-0`;
    a.innerHTML = `
        <div class="rounded-circle av-box me-3">
            <img src="${contact.img}" alt="?">
        </div>
        <div class="texts">
            <div class="d-flex justify-content-between align-items-center">
                <span class="fw-bold n">${getIcon(contact.type)} ${contact.name}</span>
                <small class="text-muted">${contact.time}</small>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <span><span class="text-primary">${contact.chat[contact.chat.length - 1].who}</span>: ${getShortText(contact.chat[contact.chat.length - 1].msg)}</span>
                <span class="badge bg-primary">${contact.unreadMsgCount}</span>
            </div>
        </div>
    `;

    container.appendChild(a);
});



