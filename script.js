// --- DATA ---

const BoyfriendsData = {
  chaotic: {
    name: "Keiran",
    archetype: "Chaotic & Unhinged",
    traits: ["Spontaneous", "Unpredictable", "Adventurous", "Wild"],
    traitDescriptions: {
      "Spontaneous": "Acts on impulse without thinking twice—plans are more like suggestions.",
      "Unpredictable": "You never know what he'll do next, which keeps things exciting (and slightly terrifying).",
      "Adventurous": "Always looking for the next thrill, whether it's legal or not.",
      "Wild": "Lives life on the edge with zero regard for consequences."
    },
    image: "🔥",
    bio: "Life's too short to be boring. Let's set something on fire... metaphorically. Maybe.",
    color: "from-orange-400 to-red-500",
    accentColor: "bg-orange-500",
    responses: {
      kiss: [
        "Mmm... didn't see that coming but I'm not complaining, ${playerName}.",
 "Fuck, your kisses are going to get me arrested someday.",
        "Later you will definitely need to tell me where you learned this.",
"Fuck, you kiss like you’re trying to start something.",
"God, yes—do that again..",
"Stop teasing me with your mouth unless you want consequences.",
"Fuck, you’re good at this, ${playerName}.",
"You’re making it real hard to be a decent human, firecracker.",
"Didn’t know you had that in you. Do it again.",
"Holy shit… where’d you learn that?",
"Oh, ${playerName}, you’re going to ruin me.",
"Mmmm.. I want you messy and loud and mine.",
"Again, ${playerName}. Harder, I dare you.",
"You keep kissing me like that and I’m going to start biting.",
"I'm not usually speechless, but damn...",
"Mmm.. ${playerName}",
"If you keep doing that, I won’t be responsible for what happens next.",
"Fuck, do that again, ${playerName}.",
        "I want to ruin you, ${playerName}."
      ],
      argue: [
        "You think I'm too reckless? That's rich coming from you, ${playerName}!",
"Relax, ${playerName}. I only break things that can be fixed… or replaced.",
"Take a breath, firecracker. I’m still not scared of you.",
"You keep expecting me to be normal. Whose fault is that?",
"I’d say sorry, but lying isn’t my kink.",
"You want me to behave? That’s a terrible use of wishes.",
"I’m sorry; but it was too funny to intervene.",
"If you can’t handle the heat, don’t date the arsonist.",
"Why are you mad? I thought it was funny.",
"Do you hear yourself? No? Lucky you.",
"Maybe if you loosened up a little, we'd have more fun.",
"Fine, I'm the problem. Happy now?",
"Oh look, you’re mad again. How shocking.",
"I’d apologize, but where’s the fun in that?",
"Oh no, consequences. My one weakness.",
"Go on. Tell me more about how awful I am.",
"If you want a sane boyfriend, I have terrible news.",
"Okay, okay, you’re right. Happy? No? Didn’t think so.",
"I’m sorry you hate fun.",
"Look at us. Dysfunctional icons.",
"If I’m a problem, at least I’m a fun one.",
"Oh, you’re mad? Cute. Tell me more, ${playerName}.",
"You always have something to say, don't you?",
        "So what if I 'accidentally' broke your favorite mug? It was ugly anyway!"
      ],
      flirt: [
        "You look dangerously beautiful today, ${playerName}.",
"I want to see what you look like when you lose control.",
"I’m so turned on just thinking of you.",
"I want you in the worst and best ways.",
"I want to see how wild you can get.",
"You should see the things I imagine doing to you.",
"I thought about you all night. And yes, it was that kind of thinking.",
"I tolerate you more than most. That’s basically love.",
"You deserve nice things. Lucky for you, I’m feeling charitable.",
"You must be tired after everything we did in my dream last night. Heheh.",
"I'd burn the world down just to keep you warm, ${playerName}.",
"You deserve better than me. But I’m too damn selfish to let you go.",
        "We could stay in tonight and cause trouble of a different kind."
      ],
      tease: [
        "Maybe you could use that mouth for more than just talking nonsense.",
"Act up again and I’ll tie you to the headboard with your own rules.",
 "Keep looking at me like that and see what happens, ${playerName}.",
 "If you run, I’ll catch you. Just warning you.",
"You’re too pretty to be this annoying.",
"If you want me, take me.",
"I could have you begging in minutes.",
"Your mouth is writing checks your body can’t cash.",
 "If you keep talking, I’ll shut you up. With my mouth.",
"I give you ten minutes before you’re begging me to misbehave.",
"Look at you pretending you don’t want my hands on you.",
"That little smirk? I’m about to fuck it right off your face.",
 "I swear, one of us is going to end up on a watchlist.",
 "Is this your way of asking for attention? Because… fair.",
 "Say please, ${playerName}. I like the way it sounds coming from you.",
 "If you want something, you’ll have to make me behave, ${playerName}.",
 "Careful. You’re waking up all my worst ideas.",
        "Oh no, there is only one bed, what will we do now?"
      ],
      talk: [
        { text: "Wow. Riveting. Truly the pinnacle of human communication.", affection: -1, trust: 0 },
        { text: "Just lit something on fire in your honor. You’re welcome.", affection: 1, trust: 0, chaos: 4 },
{ text: "Relax, I'm not ignoring you. I'm plotting something.", affection: 1, trust: 0 },
{ text: "Stop ignoring me or I’ll make a scene.", affection: -1, trust: -2, chaos: 3 },
{ text: "Keep talking. The more you rant, the hotter you get.", affection: -1, trust: 0, chaos: 1 }
      ]
    },
    events: [
      {
        prompt: "Keiran suggests breaking into an abandoned building to explore. Do you go?",
        yes: {
          playerResponse: "Hell yeah, let's do it!",
          text: "The adrenaline rush was incredible. Keiran couldn't stop grinning.",
          affection: 8,
          chaos: 10
        },
        no: {
          playerResponse: "That's way too risky, I'm not doing that.",
          text: "Keiran shrugs and says 'Your loss' but seems disappointed.",
          affection: -4,
          chaos: -3
        }
      },
      {
        prompt: "Keiran wants to sneak onto a rooftop for the view. Join him?",
        yes: {
          playerResponse: "Yes! That sounds amazing.",
          text: "The view of the skyline was absolutely breathtaking and dangerously romantic.",
          affection: 8,
          chaos: 10
        },
        no: {
          playerResponse: "I don't feel like it, sorry.",
          text: "He goes anyway and sends you a blurry photo with 'ur lame ❤️'",
          affection: -4,
          chaos: -3
        }
      },
      {
        prompt: "Keiran suggests skinny-dipping at midnight. You in?",
        yes: {
          playerResponse: "I'm in! Let's do this.",
          text: "The experience is wild, fun, and intimate.",
          affection: 8,
          chaos: 10
        },
        no: {
          playerResponse: "No way. That's crazy.",
          text: "Keiran shrugs and chuckles 'Suit yourself, Grandma.'",
          affection: -4,
          chaos: -3
        }
      },
      {
        prompt: "Keiran brings home a stray cat and insists it 'chose' you two. Do you keep it?",
        yes: {
          playerResponse: "Okay fine, we can keep the cat.",
          text: "You keep the cat who grows to affectionately love you. It hates Kieran.",
          affection: 1,
          chaos: 10
        },
        no: {
          playerResponse: "We can't just randomly keep a stray cat!",
          text: "Kieran frowns and says 'Wow. Cat hater. Didn't know that about you.'",
          affection: -4,
          chaos: 3
        }
      },
      {
        prompt: "Keiran wants to get matching tattoos on impulse. Are you in?",
        yes: {
          playerResponse: "Yes! Let's get matching tattoos!",
          text: "You both got inked and Keiran loves that you're this spontaneous.",
          affection: 10,
          trust: 6,
          chaos: 8
        },
        no: {
          playerResponse: "That's too permanent for a spur-of-the-moment decision.",
          text: "Keiran gets one anyway and shows it off later.",
          affection: -3
        }
      },
      {
        prompt: "Keiran dares you to jump off a cliff into water. Do you take the dare?",
        yes: {
          playerResponse: "You're on! Let's jump!",
          text: "The jump was terrifying and exhilarating. Keiran is thrilled.",
          affection: 9,
          chaos: 12
        },
        no: {
          playerResponse: "No way, that's too dangerous!",
          text: "Keiran jumps alone and teases you about being scared.",
          affection: -5,
          chaos: -4
        }
      }
    ],
    thresholdEvents: [
      {
        id: "chaotic_low_affection",
        threshold: { affection: { max: 10 } },
        prompt: "Keiran looks at you with unusual seriousness. 'Are we even a thing anymore?'",
        yes: {
          playerResponse: "Yes, of course we are. I'm sorry I've been distant.",
          text: "Keiran softens. 'Okay. Let's try harder then.'",
          affection: 8,
          trust: 5
        },
        no: {
          playerResponse: "I don't know... maybe not.",
          text: "Keiran nods slowly. 'Yeah. That's what I thought.'",
          affection: -10,
          trust: -8
        }
      },
      {
        id: "chaotic_high_affection",
        threshold: { affection: { min: 60 } },
        prompt: "Keiran grabs your hand. 'Run away with me. Right now. Serious.'",
        yes: {
          playerResponse: "Yes! Let's get out of here!",
          text: "You both pack bags and disappear for the weekend. It's perfect chaos.",
          affection: 15,
          trust: 10,
          chaos: 15
        },
        no: {
          playerResponse: "I can't just drop everything right now.",
          text: "Keiran laughs it off but you see a flash of hurt.",
          affection: -6,
          trust: -3
        }
      },
      {
        id: "chaotic_high_chaos",
        threshold: { chaos: { min: 70 } },
        prompt: "Keiran says 'We're chaos incarnate together. Want to make it official?'",
        yes: {
          playerResponse: "Yes! Let's make it official!",
          text: "Keiran kisses you hard. 'Best decision ever.'",
          affection: 12,
          trust: 8
        },
        no: {
          playerResponse: "I'm not ready for that kind of commitment.",
          text: "Keiran looks stunned. 'Oh. Okay then.'",
          affection: -8,
          trust: -5
        }
      }
    ]
  },
  loyal: {
    name: "Beau",
    archetype: "Loyal & Soft",
    traits: ["Caring", "Gentle", "Devoted", "Sweet"],
    traitDescriptions: {
      "Caring": "Always puts your needs first and notices the little things that make you happy.",
      "Gentle": "Soft-spoken and tender, never raises his voice or makes you feel unsafe.",
      "Devoted": "Once he's yours, he's all in—loyalty is his love language.",
      "Sweet": "Thoughtful gestures and warm affection come naturally to him."
    },
    image: "💕",
    bio: "You're my world, and I'll always be here for you. No matter what.",
    color: "from-pink-400 to-rose-500",
    accentColor: "bg-pink-500",
    responses: {
      kiss: [
        "You smell amazing, ${playerName}.",
        "I had a very nice dream that started like this.",
"God… I forget how to breathe when you kiss me like that.",
"You make me feel wanted in a way nobody ever has, angel.",
"I love how you kiss me like you mean it.",
"Mmm.. you always leave me wanting more.",
"Please don’t stop. Not yet.",
"I could do this all night. And probably will.",
"Can I kiss your cheek? Your neck? Everything?",
"Let me kiss you again, ${playerName}.",
"Please tell me I can touch you..",
"My heart is pounding. Do you feel that?",
"I’ve been wanting to do that all day.",
"Kiss me again, ${playerName}.",
        "Can you feel how much I want you, ${playerName}?"
      ],
      argue: [
        "Don’t roll your eyes at me.",
"Sometimes I think you hurt me just to see if I’ll still stay.",
"Oh, you’re mad? Great. Now we match.",
"I’m not your enemy. Stop treating me like one, ${playerName}.",
"I hate fighting with you. It makes my stomach twist.",
"No, I don’t hate you. I could never.",
"I didn’t know that bothered you. I wish you’d told me sooner.",
"You don’t have to be perfect, ${playerName}. Just be honest.",
"I never know what you want from me, ${playerName}.",
"You know I’m trying. Why does it feel like it’s never enough for you?",
"Everything always ends up being about you somehow.",
"I feel like I'm always the one trying here.",
"when was the last time we had a proper conversation?",
        "I just want to spend more time with you, is that too much to ask?"
      ],
      flirt: [
        "You don’t even know how much you mean to me, ${playerName}, do you?",
 "You’re the first thing I think about and the last before I sleep.",
 "I really want to see where this goes between us.",
 "I can’t stop thinking about you, ${playerName}. It’s getting embarrassing.",
 "Come lie down with me for a bit?",
 "I could get used to waking up next to you.",
 "I tried to come up with something smooth, but everything sounded like a YouTube ad. So. Want to hang out?",
 "I love the way you say my name.",
 "You look cold. Do you want my jacket, ${playerName}",
 "You really are so fucking hot I could bake cookies on you.",
 "You have the most beautiful eyes I’ve ever seen, angel.",
"You have no idea what I have planned for you tonight.",
 "You…wow..You look absolutely perfect, baby.",
        "You have no idea how deeply I adore you, ${playerName}."
      ],
      tease: [
        "My weakness? Whatever this is you’re doing.",
"I should annoy you back. But you’d like that.",
"I adore you. Even when you make zero sense.",
"If you pout like that again, I’m giving in.",
"You want attention that badly? Come here then.",
"If I didn’t adore you, I’d sue for emotional damages.",
"Ah, your feet are ice-cold!",
"If you wanted a hug you could’ve just asked, baby.",
"Do you practice being impossible, ${playerName}, or is it natural?",
"Keep teasing me, ${playerName}, and I’ll turn the tables.",
"You’re messing with me on purpose. I see that now.",
"Stop being so cute, ${playerName}, I'm trying to focus here.",
        "You're adorable when you're trying to mess with me."
      ],
      talk: [
        { text: "I sleep better knowing you’re safe.", affection: 3, trust: 2 },
        { text: "I made your favorite drink… even if you didn’t ask.", affection: 3, trust: 2 }
      ]
    },
    events: [
      {
        prompt: "Beau asks if you want to spend a quiet evening cuddling and watching movies. Interested?",
        yes: {
          playerResponse: "That sounds perfect. I'd love to.",
          text: "You spent the perfect cozy night together. Beau felt so loved.",
          affection: 8,
          trust: 6
        },
        no: {
          playerResponse: "I'm not really in the mood for that tonight.",
          text: "Beau tries to hide disappointment. 'That's okay, maybe another time.'",
          affection: -5,
          trust: -3
        }
      },
      {
        prompt: "Beau paces in front of you, gathering courage. 'I… want you to meet my family. They’ve been asking about you. Will you come?' His voice trembles just a little.",
        yes: {
          playerResponse: "Yes! I'd love to meet your family.",
          text: "The visit is warm and easy. Beau watches you the whole time, pride glowing in his expression. He squeezes your hand on the way home, unable to stop smiling.",
          affection: 10,
          trust: 10
        },
        no: {
          playerResponse: "I don't think I'm ready for that yet.",
          text: "He tries to hide the hurt, but the silence afterward stretches long and heavy. 'I understand... I guess.'",
          affection: -8,
          trust: -8
        }
      },
      {
        prompt: "You awake to sunrise and the smell of something warm and sweet. You look over to see Beau smiling in the doorway, a tray of breakfast in his arms. 'Surprise...?' He beams shyly.",
        yes: {
          playerResponse: "This is so sweet! Thank you.",
          text: "You share a slow, gentle morning together, knees brushing under the blankets. Beau beams at every compliment like he’s storing them for later.",
          affection: 7,
          trust: 5
        },
        no: {
          playerResponse: "I need to get going, sorry.",
          text: "Beau's face falls. 'I'll just put it in the fridge, I suppose...'.",
          affection: -6,
          trust: -4
        }
      }
    ],
    thresholdEvents: [
      {
        id: "loyal_low_affection",
        threshold: { affection: { max: 10 } },
        prompt: "Beau stands in front of you, eyes glossy, voice trembling. 'Do you… still love me? Because lately it feels like I’m the only one trying.'",
        yes: {
          playerResponse: "Yes, of course I do. I'm sorry I haven't shown it.",
          text: "He pulls you into a desperate hug, holding on like you’re something slipping out of his hands. 'I need to hear that sometimes.'",
          affection: 10,
          trust: 8
        },
        no: {
          playerResponse: "I... I don't know anymore.",
          text: "Beau is silent and the room fills with tension before he quietly says: 'I see...'",
          affection: -15,
          trust: -12
        }
      },
      {
        id: "loyal_high_affection",
        threshold: { affection: { min: 60 } },
        prompt: "Beau holds your hand. 'I want to be with you forever. Will you let me?'",
        yes: {
          playerResponse: "Yes, forever sounds perfect with you.",
          text: "Beau's eyes light up with pure joy. 'You make me so happy.'",
          affection: 15,
          trust: 15
        },
        no: {
          playerResponse: "That's... that's a lot. I'm not sure.",
          text: "Beau tries to smile through the pain. 'Right, yeah... too soon.'",
          affection: -10,
          trust: -8
        }
      },
      {
        id: "loyal_high_trust",
        threshold: { trust: { min: 70 } },
        prompt: "Beau whispers, 'I trust you with everything I am. Do you feel the same?'",
        yes: {
          playerResponse: "Absolutely. I trust you completely.",
          text: "Beau's smile is radiant. 'That means everything to me.'",
          affection: 12,
          trust: 10
        },
        no: {
          playerResponse: "I'm working on it, but I'm not there yet.",
          text: "Beau nods slowly, trying not to cry.",
          affection: -8,
          trust: -12
        }
      }
    ]
  },
  nerdy: {
    name: "Lysander",
    archetype: "Nerdy & Anxious",
    traits: ["Intelligent", "Thoughtful", "Awkward", "Endearing"],
    traitDescriptions: {
      "Intelligent": "Sharp mind and deep knowledge—he can talk about anything from physics to fantasy lore.",
      "Thoughtful": "Remembers every detail you share and puts real effort into understanding you.",
      "Awkward": "Socially anxious and prone to rambling, but it's honestly kind of charming.",
      "Endearing": "His nervousness and genuine sweetness make him impossible not to love."
    },
    image: "📚",
    bio: "I calculated the probability of us meeting... statistically improbable, but here we are!",
    color: "from-blue-400 to-indigo-500",
    accentColor: "bg-blue-500",
    responses: {
      kiss: [
        "That was… wow. I need a moment to recalibrate.",
"Mmmm.. you’re so good at that, ${playerName}.",
"Fuck, my brain just blue-screened.",
"Mmm.. You taste like dopamine.",
"I can’t even pretend I don’t want more.",
"I need to lie down. Preferably on top of you.",
"Mmmm.. you make my software turn into hardware..",
        "I've thought about this more times than I'd like to admit.",
 "Slow down—no, fuck it, don’t slow down.",
 "Mmmm…new favorite activity unlocked.",
 "You’re not allowed to kiss anyone else. Ever.",
"You’re rewriting my entire emotional baseline.",
        "Do it again, ${playerName}. For science."
      ],
      argue: [
        "Don't. Just… don't. I can't fucking talk about this right now.",
"I’m not trying to fight, I’m just overwhelmed.",
"Please just tell me what you want from me, ${playerName}. Plainly.",
"Fine. I’m sorry I infodumped about quasars for forty minutes again.",
"I’m not upset, ${playerName}. Just overwhelmed. There’s a difference.",
"Maybe if you actually listened instead of dismissing my concerns...",
"I'm not being paranoid, ${playerName}, I'm being logical!",
"I practiced this conversation in the shower and still fucked it up.",
"I hate fighting with you. My serotonin levels are in freefall.",
"I didn’t mean it like that. Let me explain.",
"You deserve someone patient. I’m trying to be that.",
"I’ve always been like this, and now it is suddenly an issue?",
"I have a life outside of us, you know that right?",
  "That's not how math works! That's not how anything works!",
"You are so frustrating, ${playerName}.",
        "I'm sorry I rambled about quantum physics for two hours..."
      ],
      flirt: [
        "Heh, you’re awfully close. A-are we going to kiss now?",
"Roses are red. Violets are blue. If you were a pokemon, I’d choose you.",
  "You're mine in every multiverse, ${playerName}, and I'm yours.",
"I’ve never wanted anyone to mess up my plans as much as you, starlight.",
  "You're distracting as hell, ${playerName}.",
  "If you were a theorem, I’d try to prove you all night.",
"What do you mean you’re cold? Come here.",
"My logic shuts down the moment you get close to me. The rest of me? You own that.",
"Tell me to come closer and I will.",
"I’m no rizz demon so I’ll just say it straight. Want to come over tonight?",
  "I have the only wand a magical girl could ever need. Want to see?",
"Do you want to touch my limited edition figurine, starlight?",
  "Can I interest you in a night of board games and emotional intimacy?",
"I may not be smooth, but I'm sincere. I just want you to know you're incredible, starlight.",
        "You're like... the human equivalent of finding a first edition book."
      ],
      tease: [
        "Careful, I’m not as innocent as I look, ${playerName}.",
"Trying to out-awkward me? Good luck.",
"Wow, that was almost smooth. Almost.",
"You’re lucky your cute or I’d be offended.",
"You've gotten under my skin and I hate how much I love it.",
"Just so you know, I notice when you’re messing with me, ${playerName}.",
"You’re stubborn. I like it. Most days.",
"Why are you like this? No, seriously—why?",
"Keep this up and I’m pinning you with enthusiasm, not skill.",
"That’s adorable. Wrong, but adorable.",
"I swear you enjoy watching me malfunction.",
"You really want to test me right now, ${playerName}?",
"Y-you're doing this on purpose, aren't you?",
        "I-I know what you're doing and it's... actually working, ${playerName}."
      ],
      talk: [
        { text: "Oh great. Another situation for me to overthink until dawn.", affection: -3, trust: -2 },
{ text: "Sent you a meme only 12 people on earth would understand. Did you get it?", affection: 2, trust: 0, chaos: 3 },
{ text: "Wait—hold on—I wasn’t prepared for this level of attraction.", affection: 2, trust: 0, chaos: 3 },
{ text: "Hope your day is treating you gently, starlight.", affection: 2, trust: 0, chaos: 0 },
{ text: "Want to see the new dice I got? They’re very cool.", affection: 1, trust: 0, chaos: 0 },
{ text: "I was… just thinking about you. A normal amount.", affection: 2, trust: 0, chaos: 0 },
        { text: "If I say something weird, pretend it was charming.", affection: 1, trust: 1 }
      ]
    },
    events: [
      {
        prompt: "Lysander invites you to a comic book convention. Want to go?",
        yes: {
          playerResponse: "Yes! That sounds like so much fun!",
          text: "You had an amazing time nerding out together. Lysander was so happy.",
          affection: 9,
          trust: 6
        },
        no: {
          playerResponse: "That's not really my thing, sorry.",
          text: "Lysander goes alone and sends you pics, but seems sad you missed it.",
          affection: -5,
          trust: -3
        }
      },
      {
        prompt: "Lysander wants to teach you their favorite video game. Are you interested?",
        yes: {
          playerResponse: "Sure! I'd love to learn.",
          text: "Lysander loved sharing this with you. You both stayed up way too late.",
          affection: 7,
          trust: 5
        },
        no: {
          playerResponse: "I'm not really into gaming.",
          text: "Lysander understands but you can tell they're disappointed.",
          affection: -3,
          trust: -2
        }
      },
      {
        prompt: "Lysander nervously asks if you want to read their favorite book series together. Do you?",
        yes: {
          playerResponse: "I'd love to read it with you!",
          text: "Reading together became your special thing. Lysander treasures this.",
          affection: 8,
          trust: 7
        },
        no: {
          playerResponse: "Reading isn't really my thing.",
          text: "Lysander tries not to show how much that hurt.",
          affection: -6,
          trust: -5
        }
      }
    ],
    thresholdEvents: [
      {
        id: "nerdy_low_affection",
        threshold: { affection: { max: 10 } },
        prompt: "Lysander looks anxious. 'Did I do something wrong? You seem distant.'",
        yes: {
          playerResponse: "No, it's not you. I've just been stressed.",
          text: "Lysander relaxes a bit. 'Oh thank god. I've been spiraling.'",
          affection: 8,
          trust: 6
        },
        no: {
          playerResponse: "Maybe we're just not working out.",
          text: "Lysander's face crumples. 'I... I see.'",
          affection: -12,
          trust: -10
        }
      },
      {
        id: "nerdy_high_affection",
        threshold: { affection: { min: 60 } },
        prompt: "Lysander takes your hand shyly. 'You're the best thing that ever happened to me. Can we keep this going?'",
        yes: {
          playerResponse: "Of course! You're amazing.",
          text: "Lysander beams. 'I promise I'll be the best partner I can be.'",
          affection: 14,
          trust: 12
        },
        no: {
          playerResponse: "I'm not sure where this is going.",
          text: "Lysander's heart breaks visibly. 'Right. Statistically unlikely anyway.'",
          affection: -10,
          trust: -8
        }
      },
      {
        id: "nerdy_high_trust",
        threshold: { trust: { min: 70 } },
        prompt: "Lysander says quietly, 'I trust you completely. That's rare for me. Do you trust me too?'",
        yes: {
          playerResponse: "Yes, I trust you completely.",
          text: "Lysander's eyes shine with emotion. 'That means everything.'",
          affection: 10,
          trust: 12
        },
        no: {
          playerResponse: "Trust takes time for me.",
          text: "Lysander withdraws, hurt. 'Understood.'",
          affection: -7,
          trust: -15
        }
      }
    ]
  },
  athletic: {
    name: "Oren",
    archetype: "Athletic & Confident",
    traits: ["Strong", "Ambitious", "Charismatic", "Bold"],
    traitDescriptions: {
      "Strong": "Physically powerful and emotionally resilient—a protector by nature.",
      "Ambitious": "Driven to be the best in everything he does, from sports to relationships.",
      "Charismatic": "Natural confidence and charm that draws people in effortlessly.",
      "Bold": "Takes what he wants without hesitation and isn't afraid to make the first move."
    },
    image: "💪",
    bio: "I go after what I want, and I wanted you from day one. No regrets.",
    color: "from-green-400 to-emerald-600",
    accentColor: "bg-green-500",
    responses: {
      kiss: [
        "Mmm... best workout of the day, ${playerName}.",
        "I’ll take it that you like what you see.",
"Damn, Princess. That was MVP material.",
 "Damn, rookie. Warn a guy next time.",
 "Come here, ${playerName}. I want you right against me.",
"I could get used to this as my post-game ritual.",
"After that, I might need a cold shower. Or another round.",
"Come here, ${playerName}. I’m not done with you.",
"You’ve got my full attention now.",
        "You drive me crazy in the best way, princess."
      ],
      argue: [
        "You act like I never make time for you!",
"I'm doing my best here, ${playerName}, what more do you want?",
"Yell at me all you want, I’m still coming home to you.",
"Ok, fine. I’m an asshole sometimes. But never to you on purpose.",
"I train every day to be the best. Why can't you support that?",
"Stop twisting everything I say.",
"If you want something from me, ${playerName}, say it straight.",
"You're always jealous when other girls talk to me, ${playerName}.",
"You knew what you were signing up for when you started dating me. I don't have time for weekly date nights and all that crap.",
"We only talk in between games whenever it is convenient for you. Do you even know anything that is going on in my life right now?",
"i don't understand why you always have a problem with me.",
        "I'm allowed to have friends who happen to be attractive!"
      ],
      flirt: [
        "You look incredible today, ${playerName}, as always.",
"Want to skip the gym and just wrestle here?",
"You wanna race, ${playerName}? Loser has to do whatever the winner wants.",
"You go to all games looking this cute, ${playerName}? Or only the ones you know I'll be at?",
"If we win, you’re mine tonight. If we lose, I’m still gonna fuck you.",
"If we win state, I’m fucking you on the field. I’m not joking.",
"You wear my jersey yet, or do I need to strip you and fix that myself?",
"Bet I can make you forget every other guy’s name in ten minutes flat.",
"I lift every day so I can carry you anywhere you want, princess.",
"${playerName}, if you knew what I think about you at night…",
"You're the only person who makes me want to skip practice.",
"You're the best part of my day, ${playerName}, hands down.",
        "You’d look good wearing my jersey, ${playerName}. Or nothing."
      ],
      tease: [
        "Tease me some more ${playerName} and I’ll show you my reaction.",
"Bet you can’t go five minutes without thinking about me ${playerName}. Try it.",
"You’re playing with a fire you can’t handle, princess.",
"Look at you, pretending you’re not obsessed with me.",
"Bold trash talk for someone who trips on air.",
"Trash talk me more. It’s honestly kind of hot.",
"Call me cocky one more time. I dare you.",
"That wasn’t flirting. That was a cry for help.",
"You’re playing a game with a very competitive man.",
"That little attitude? I’ll fuck it right out of you later.",
"Don’t start something you can’t finish on your back.",
"Don’t make me chase you ${playerName}. Or do. I love a challenge.",
"I can pin you with one arm. Don’t tempt me.",
"You like playing rough, huh?",
"You think you're in control here? Cute.",
"Oh, so we're playing games now? I'm in.",
        "Playing hard to get, ${playerName}? I love a good competition."
      ],
      talk: [
        { text: "Front-row seat’s got your name on it next game.", affection: 3, trust: 1 },
{ text: "Missed you in the stands today.", affection: 1, trust: -1 },
{ text: "Finally. Thought you ditched me.", affection: 0, trust: -1 },
{ text: "Don’t say another word. I’ve had a long practice and I need you.", affection: 3, trust: 3 },
        { text: "Saved you the last protein shake. Come claim it.", affection: 0, trust: 0, chaos: 3 }
      ]
    },
    events: [
      {
        prompt: "Oren invites you to watch their game from the front row. Will you go?",
        yes: {
          playerResponse: "Of course! I wouldn't miss it!",
          text: "Oren played amazingly and kept looking at you. They loved having you there.",
          affection: 9,
          trust: 5
        },
        no: {
          playerResponse: "I can't make it this time, sorry.",
          text: "Oren looks disappointed but tries to play it cool. 'No big deal.'",
          affection: -6,
          trust: -4
        }
      },
      {
        prompt: "Oren wants to go for an early morning run together. Are you joining?",
        yes: {
          playerResponse: "Sure! Let's do it.",
          text: "The sunrise run was invigorating. Oren appreciated you making the effort.",
          affection: 7,
          trust: 4
        },
        no: {
          playerResponse: "That's way too early for me.",
          text: "Oren runs alone and seems let down you didn't join.",
          affection: -3,
          trust: -2
        }
      },
      {
        prompt: "Oren asks if you want to train together at the gym. Interested?",
        yes: {
          playerResponse: "Yeah, let's train together!",
          text: "Working out together was fun and intense. Oren loved it.",
          affection: 8,
          trust: 5
        },
        no: {
          playerResponse: "The gym really isn't my thing.",
          text: "Oren shrugs it off but you can tell they're disappointed.",
          affection: -4,
          trust: -3
        }
      }
    ],
    thresholdEvents: [
      {
        id: "athletic_low_affection",
        threshold: { affection: { max: 10 } },
        prompt: "Oren confronts you. 'Are we even together anymore? This feels one-sided.'",
        yes: {
          playerResponse: "Yes, we are. I'll do better.",
          text: "Oren nods. 'Okay. Let's work on it then.'",
          affection: 9,
          trust: 6
        },
        no: {
          playerResponse: "Maybe you're right. Maybe we're not.",
          text: "Oren's jaw tightens. 'Yeah. That's what I figured.'",
          affection: -12,
          trust: -10
        }
      },
      {
        id: "athletic_high_affection",
        threshold: { affection: { min: 60 } },
        prompt: "Oren grins at you. 'You're my MVP. Want to make this official-official?'",
        yes: {
          playerResponse: "Yes! Absolutely!",
          text: "Oren lifts you up and spins you. 'Hell yeah!'",
          affection: 15,
          trust: 10
        },
        no: {
          playerResponse: "I'm not sure I'm ready for that.",
          text: "Oren's smile fades. 'Oh. Right. Cool.'",
          affection: -9,
          trust: -7
        }
      },
      {
        id: "athletic_low_trust",
        threshold: { trust: { max: 20 } },
        prompt: "Oren looks serious. 'I need to know I can count on you. Can I?'",
        yes: {
          playerResponse: "Yes, you can count on me. Always.",
          text: "Oren relaxes. 'Good. That's all I needed to hear.'",
          affection: 7,
          trust: 12
        },
        no: {
          playerResponse: "I don't know if I can promise that.",
          text: "Oren looks away. 'Got it. Loud and clear.'",
          affection: -10,
          trust: -15
        }
      }
    ]
  },
  mysterious: {
    name: "Jensen",
    archetype: "Mysterious & Sarcastic",
    traits: ["Protective", "Witty", "Enigmatic", "Intense"],
    traitDescriptions: {
      "Protective": "Fiercely guards what's his—you'll always feel safe with him watching your back.",
      "Witty": "Quick with sarcastic comebacks and dark humor that keeps you on your toes.",
      "Enigmatic": "Hard to read and slow to open up, but that mystery makes him all the more intriguing.",
      "Intense": "When he wants something (or someone), his focus is unwavering and all-consuming."
    },
    image: "🌙",
    bio: "I don't open up easily, but for you... I might make an exception.",
    color: "from-purple-500 to-violet-600",
    accentColor: "bg-purple-600",
    responses: {
      kiss: [
        "Oh fuck, ${playerName}, don't stop now.",
"Keep going and I’ll forget how gentle I’m trying to be.",
"You feel too good to be real.",
"Mm… deeper. I said deeper.",
"I should punish you for tasting so fucking sweet.",
"I need more of you. All of you.",
"You can be rough. I can take it.",
"You bring out the worst in me, you know that? And yet… you’re so delicious.",
"Fuck… you have no idea how hard I’m trying to stay calm.",
"Mm…fuck, ${playerName}. I want to feel you pressed against me.",
"If you think this is me losing control you haven’t seen anything, yet.",
"I want to kiss every inch of you. Slowly.",
"God..you taste unreal.",
"Don’t be shy, darling. I love the way you moan my name.",
"What pretty noises you are making for me. Am I making you feel good?",
"Mmm.. now look at me, ${playerName}. Good girl.",
        "Would you stop being respectable ${playerName} and fuck me already?",
"You have no idea what you do to me, you little nightmare.",
"You’re going to regret making me this addicted.",
"Tell me your safeword, darling. I’m not planning on stopping unless you use it.",
"If you keep that up, I’ll forget how to be composed.",
"Touch me like that again and we're not leaving this room.",
        "You're the only one who gets to do that, ${playerName}."
      ],
      argue: [
        "Why are you being so difficult?",
"If you knew what I really was, you wouldn’t be raising your voice.",
"Call me the villain. I’ve heard worse from better.",
"Say what’s actually bothering you. I’m not psychic.",
"You don’t need to raise your voice. I hear you just fine.",
"You’re scared of what I’d do for you. You should be.",
"What is your problem? You always pull this shit.",
"I'm trying to protect you from me, ${playerName}, why can't you see that?",
"You think you know me? You don't know half of it.",
"Push me away all you want. I'm not going anywhere, ${playerName}.",
        "I was protecting you, but sure, make me the villain."
      ],
      flirt: [
        "You're the only thing that keeps me up at night, my little nightmare.",
"What’s it gonna take to make those legs of yours divorce just for me?",
"Come here ${playerName}. Just for a minute.",
"My body and my brain aren’t exactly on the same page when it comes to you.",
"You have no idea what I want to do to you, ${playerName}.",
"You make me feel safe, ${playerName}. That’s terrifying.",
"I'd cross any line for you. That should terrify me, but it doesn't.",
"Say yes, and I’ll ruin you gently.",
"You’re begging to be claimed. I can tell.",
"Everyone thinks you’re so sweet. I’m the only one who knows how loud you get when I touch you.",
"Every single thought that runs through my head seems to loop back to you. I can’t stop. And the worst part is, I don’t want to. Is that enough? That what you wanted to hear from me?",
"I don’t know how to stop wanting you, darling.",
"Say my name like you did last night, ${playerName}.",
"If I kiss you now, I won’t be able to stop, my little nightmare.",
"If anything ever happens to you I’ll burn the whole damn world down.",
        "I’d ruin myself for you and still say thank you."
      ],
      tease: [
        "I will give that mouth something to do.",
"You’re the reason I sigh dramatically.",
"Careful ${playerName}. I bite back..",
"Say please. I like how it sounds.",
"You’re such a needy girl.",
"I am definitely going to have to punish you for that later, ${playerName}.",
"Keep talking. I’m enjoying the show.",
"You wanted me to notice you, didn’t you?",
"You want my hands on you? Earn it.",
"You’re not ready for what I’d do to you.",
"Behave. Or don’t. I’m excellent at punishment.",
"One more bratty little look and you’re over my knee.",
"Try and make me jealous again. Then I’ll remind you exactly who you chose.",
"You really shouldn't tease me, you know.",
"One more word and I’ll put you in your place, ${playerName}.",
"You think you're in control here? Cute.",
 "If you want me to touch you, you need to behave.",
        "You think you're clever, ${playerName}? I'm enjoying this."
      ],
      talk: [
        { text: "Left something on your windowsill. Don’t scream.", affection: 0, trust: -1, chaos: 4 },
{ text: "You’re late, little nightmare.", affection: 0, trust: -1, chaos: 1 },
{ text: "If they touch you again, I’m ending the conversation.", affection: 0, trust: -1, chaos: 1 },
{ text: "I didn’t sleep. Not well, anyway.", affection: 0, trust: 1, chaos: 0 },
{ text: "Dreamed of you. Woke up angry it wasn’t real.", affection: 2, trust: 1, chaos: 0 },
        { text: "Silence speaks volumes. I hear you loud and clear.", affection: -5, trust: -4 }
      ]
    },
    events: [
      {
        prompt: "Jensen asks if you want to take a midnight drive with no destination. Coming along?",
        yes: {
          playerResponse: "Yes, let's go.",
          text: "The drive was quiet and intimate. Jensen opened up a little.",
          affection: 9,
          trust: 8
        },
        no: {
          playerResponse: "It's too late, I should get some sleep.",
          text: "Jensen drives alone, music loud. They seem more closed off now.",
          affection: -5,
          trust: -6
        }
      },
      {
        prompt: "Jensen wants to show you their secret spot—a hidden rooftop view. Will you go?",
        yes: {
          playerResponse: "I'd love to see it.",
          text: "You felt honored they shared this with you. Jensen rarely lets people in.",
          affection: 10,
          trust: 10
        },
        no: {
          playerResponse: "I don't think I should.",
          text: "Jensen's walls go back up. 'Forget I asked.'",
          affection: -7,
          trust: -9
        }
      },
      {
        prompt: "Jensen invites you to stay the night, no expectations. Do you stay?",
        yes: {
          playerResponse: "Yeah, I'll stay.",
          text: "The night was quiet and safe. Jensen held you close.",
          affection: 8,
          trust: 7
        },
        no: {
          playerResponse: "I should head home tonight.",
          text: "Jensen looks hurt but hides it quickly. 'Sure. Whatever.'",
          affection: -6,
          trust: -7
        }
      }
    ],
    thresholdEvents: [
      {
        id: "mysterious_low_affection",
        threshold: { affection: { max: 10 } },
        prompt: "Jensen's voice is cold. 'So this meant nothing to you?'",
        yes: {
          playerResponse: "No! It means everything. I'm sorry.",
          text: "Jensen's guard drops slightly. 'Don't make me regret this.'",
          affection: 10,
          trust: 8
        },
        no: {
          playerResponse: "I'm not sure what this is anymore.",
          text: "Jensen's expression hardens. 'Got it. Won't make that mistake again.'",
          affection: -15,
          trust: -12
        }
      },
      {
        id: "mysterious_high_affection",
        threshold: { affection: { min: 60 } },
        prompt: "Jensen looks at you intensely. 'You've gotten under my skin. Stay with me?'",
        yes: {
          playerResponse: "Yes. I'm not going anywhere.",
          text: "Jensen pulls you close. 'You're mine. And I'm yours.'",
          affection: 16,
          trust: 12
        },
        no: {
          playerResponse: "I need some space to think.",
          text: "Jensen's face closes off completely. 'Understood.'",
          affection: -12,
          trust: -10
        }
      },
      {
        id: "mysterious_high_trust",
        threshold: { trust: { min: 70 } },
        prompt: "Jensen admits quietly, 'I've never trusted anyone like I trust you. That scares me. Should it?'",
        yes: {
          playerResponse: "No, you can trust me completely.",
          text: "Jensen exhales in relief. 'Okay. Good.'",
          affection: 11,
          trust: 13
        },
        no: {
          playerResponse: "I don't know how to answer that.",
          text: "Jensen pulls away, walls rebuilt instantly.",
          affection: -9,
          trust: -16
        }
      }
    ]
  }
};

// Universal dialogue responses that work for all boyfriends (30% chance to appear)
const UniversalResponses = {
  kiss: [
    "Mmm... I've been wanting to do that.",
    "You're intoxicating, ${playerName}.",
    "I could kiss you forever.",
    "You make me feel things I didn't know I could feel.",
    "More. Please.",
    "You're dangerously addictive.",
    "That was... perfect.",
    "I'm never letting you go.",
    "You drive me absolutely wild.",
    "God, you're beautiful."
  ],
  argue: [
    "Can we not do this right now?",
    "You're twisting my words, ${playerName}.",
    "I don't want to fight with you.",
    "Why does it always have to be like this?",
    "You're being unfair.",
    "I'm trying here, okay?",
    "This again? Really?",
    "You never let things go, do you?",
    "Can we talk about this later?",
    "I don't have the energy for this right now."
  ],
  flirt: [
    "You look incredible today, ${playerName}.",
    "Have I told you how amazing you are?",
    "You're all I think about.",
    "I'm so lucky to have you.",
    "You're absolutely stunning.",
    "I can't take my eyes off you.",
    "You make everything better.",
    "Come here. I want to hold you.",
    "You're perfect, you know that?",
    "I'm completely yours."
  ],
  tease: [
    "You're playing with fire, ${playerName}.",
    "Careful what you start.",
    "You think you're so clever, don't you?",
    "Keep that up and see what happens.",
    "You're trouble. I like it.",
    "Oh, you're asking for it now.",
    "Don't start something you can't finish.",
    "You love getting under my skin, don't you?",
    "Two can play that game.",
    "You're going to regret that... in the best way."
  ],
  talk: [
    { text: "Hey, I was thinking about you.", affection: 3, trust: 2 },
    { text: "Just wanted to check in. How are you?", affection: 2, trust: 1 },
    { text: "Miss you.", affection: 2, trust: 1 },
    { text: "Wish you were here.", affection: 3, trust: 1 },
    { text: "...", affection: -2, trust: -1 },
    { text: "Guess you're busy.", affection: -3, trust: -2 },
    { text: "Okay, I see how it is.", affection: -4, trust: -3 },
    { text: "Whatever.", affection: -3, trust: -2 }
  ]
};

const QuizQuestions = [
  {
    question: "What's your ideal date?",
    options: [
      { text: "Midnight urban exploration", type: "chaotic" },
      { text: "Cozy movie night at home", type: "loyal" },
      { text: "Museum or bookstore browsing", type: "nerdy" },
      { text: "Rock climbing or beach volleyball", type: "athletic" },
      { text: "Late night drive to nowhere", type: "mysterious" }
    ]
  },
  {
    question: "How should your boyfriend handle conflict?",
    options: [
      { text: "Turn it into something fun and wild", type: "chaotic" },
      { text: "Talk it through with patience", type: "loyal" },
      { text: "Analyze the problem logically", type: "nerdy" },
      { text: "Face it head-on confidently", type: "athletic" },
      { text: "Give space then resolve privately", type: "mysterious" }
    ]
  },
  {
    question: "Pick a way he'd surprise you:",
    options: [
      { text: "Spontaneous road trip at 3 AM", type: "chaotic" },
      { text: "Handwritten love letters", type: "loyal" },
      { text: "Custom playlist based on your moods", type: "nerdy" },
      { text: "Surprise adventure activity", type: "athletic" },
      { text: "Shows up when you need him most", type: "mysterious" }
    ]
  },
  {
    question: "What's most attractive?",
    options: [
      { text: "Unpredictability and excitement", type: "chaotic" },
      { text: "Loyalty and emotional availability", type: "loyal" },
      { text: "Intelligence and deep conversations", type: "nerdy" },
      { text: "Confidence and ambition", type: "athletic" },
      { text: "Mystery and protective nature", type: "mysterious" }
    ]
  },
  {
    question: "How does he show affection?",
    options: [
      { text: "Crazy adventures and surprises", type: "chaotic" },
      { text: "Constant reassurance and cuddles", type: "loyal" },
      { text: "Remembering small details about you", type: "nerdy" },
      { text: "Physical touch and quality time", type: "athletic" },
      { text: "Protective gestures and rare vulnerability", type: "mysterious" }
    ]
  }
];

// Player archetype questions (will render inline with quiz when needed)
const PlayerSliderQuestions = [
  {
    target: "player",
    kind: "slider",
    question: "Rate how unpredictable you are.",
    min: 1,
    max: 5,
    defaultValue: 3,
    hoverText: {
      1: "Completely predictable. Who likes surprises?",
      2: "Stable. But I adapt when necessary.",
      3: "A healthy mix of spontaneity.",
      4: "Walking plot twist.",
      5: "Certifiably unhinged."
    },
    points: {
      "1": { Quirky: 0, Bubbly: 0, Difficult: 0, Icy: 5, Motherly: 5 },
      "2": { Quirky: 1, Bubbly: 0, Difficult: 1, Icy: 4, Motherly: 4 },
      "3": { Quirky: 2, Bubbly: 2, Difficult: 2, Icy: 3, Motherly: 3 },
      "4": { Quirky: 3, Bubbly: 3, Difficult: 4, Icy: 2, Motherly: 2 },
      "5": { Quirky: 5, Bubbly: 4, Difficult: 6, Icy: 0, Motherly: 0 }
    }
  }
];

const BoyfriendSliderQuestions = [
  {
    target: "boy",
    kind: "slider",
    question: "How romantic do you want your partner to be?",
    min: 1,
    max: 5,
    defaultValue: 3,
    hoverText: {
      1: "Chill and subtle.",
      2: "Minimal.",
      3: "Balanced.",
      4: "Passionate.",
      5: "Borderline theatric."
    },
    points: {
      "1": { mysterious: 0, nerdy: 5, athletic: 4, chaotic: 0, loyal: 1 },
      "2": { mysterious: 1, nerdy: 3, athletic: 3, loyal: 1, chaotic: 0 },
      "3": { mysterious: 3, chaotic: 2, nerdy: 1, loyal: 3, athletic: 2 },
      "4": { mysterious: 4, chaotic: 3, loyal: 4, athletic: 1, nerdy: 0 },
      "5": { mysterious: 4, chaotic: 5, loyal: 3, athletic: 0, nerdy: 0 }
    }
  }
];

const PlayerQuestions = [
  {
    question: "How do you enter a new group?",
    options: [
      { text: "Break the ice with a joke", type: "Quirky" },
      { text: "Check if everyone’s comfortable", type: "Motherly" },
      { text: "Keep it cool and minimal", type: "Icy" },
      { text: "Test them before you open up", type: "Difficult" },
      { text: "Smile big and say hi to all", type: "Bubbly" }
    ]
  },
  {
    question: "How do you show care?",
    options: [
      { text: "Weird little gifts or memes", type: "Quirky" },
      { text: "Cooking and checking in often", type: "Motherly" },
      { text: "Quality time, few words", type: "Icy" },
      { text: "Challenging them to improve", type: "Difficult" },
      { text: "Lots of encouragement and hugs", type: "Bubbly" }
    ]
  },
  {
    question: "When stressed you...",
    options: [
      { text: "Laugh it off with odd humor", type: "Quirky" },
      { text: "Take care of others to cope", type: "Motherly" },
      { text: "Withdraw and process quietly", type: "Icy" },
      { text: "Get blunt and critical", type: "Difficult" },
      { text: "Vent, then bounce back fast", type: "Bubbly" }
    ]
  },
  {
    question: "Your social energy:",
    options: [
      { text: "Flares up in bursts", type: "Quirky" },
      { text: "Steady and nurturing", type: "Motherly" },
      { text: "Selective and reserved", type: "Icy" },
      { text: "Intense but guarded", type: "Difficult" },
      { text: "Warm and sparkly", type: "Bubbly" }
    ]
  },
  {
    question: "People often say you are...",
    options: [
      { text: "Odd but lovable", type: "Quirky" },
      { text: "Comforting and reliable", type: "Motherly" },
      { text: "Cool and composed", type: "Icy" },
      { text: "A tough nut to crack", type: "Difficult" },
      { text: "Sunshine in human form", type: "Bubbly" }
    ]
  }
];

const InteractionCooldowns = {
  kiss: 5000,
  flirt: 3000,
  tease: 3000,
  argue: 1000,
  talk: 2000
};

function createCooldownState() {
  return Object.keys(InteractionCooldowns).reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});
}

// --- STATE ---

const state = {
  gameState: "quiz", // 'quiz' | 'game' | 'ending'
  currentQuestion: 0,
  scores: {
    chaotic: 0,
    loyal: 0,
    nerdy: 0,
    athletic: 0,
    mysterious: 0
  },
  boyfriend: null,
  boyfriendType: null,
  affection: 15,
  trust: 5,
  chaos: 0,
  message: "",
  showHearts: false,
  quizHistory: [],
  showBreakupConfirm: false,
  quizStarted: false,
  showNameErrorModal: false,
  interactionLog: [],
  playerProfile: null,
  showMenu: false,
  nameError: "",
  showDeleteConfirm: false,
  quizStage: "player", // player | boy
  showPlayerToBoyTransition: false,
  prefCollected: false,
  prefAnswers: {
    color: "",
    happy: "",
    treat: "",
    safe: "",
    likedName: ""
  },
  playersecret: "",
  showSecretForm: false,
  playerArchetype: null,
  playerArchetypeDone: false,
  playerArchetypeScores: {
    Quirky: 0,
    Motherly: 0,
    Icy: 0,
    Difficult: 0,
    Bubbly: 0
  },
  playerArchetypeQuestion: 0,
  playerQuizHistory: [],
  showAudioMenu: false,
  audioSettings: {
    voiceEffects: true,
    soundEffects: true,
    backgroundMusic: true
  },
  interactionCount: 0,
  nextEventAt: null,
  triggeredThresholdEvents: [],
  showEventPopup: false,
  currentEvent: null,
  eventMessages: [],
  eventMessagesVisible: 0,
  eventShowingTyping: false,
  cooldowns: createCooldownState(),
  showCredits: false
};

let baseBodyClass = "";
let baseBodyBg = "";
const BoyfriendBackgrounds = {
  chaotic: "linear-gradient(135deg,#ffedd5 0%,#fb923c 45%,#ef4444 100%)",
  loyal: "linear-gradient(135deg,#ffe4e6 0%,#f472b6 45%,#ec4899 100%)",
  nerdy: "linear-gradient(135deg,#dbeafe 0%,#a5b4fc 45%,#6366f1 100%)",
  athletic: "linear-gradient(135deg,#dcfce7 0%,#4ade80 45%,#22c55e 100%)",
  mysterious: "linear-gradient(135deg,#ede9fe 0%,#c084fc 45%,#7c3aed 100%)"
};

const BoyfriendShadowColors = {
  chaotic: "rgba(239,68,68,0.45)",
  loyal: "rgba(236,72,153,0.45)",
  nerdy: "rgba(99,102,241,0.4)",
  athletic: "rgba(52,211,153,0.4)",
  mysterious: "rgba(124,58,237,0.4)"
};

// Universal events that work for all boyfriends (uses {name} placeholder)
const UniversalEvents = [
  {
    prompt: "{name} wants to grab coffee together. Do you want to go?",
    yes: {
      playerResponse: "Yes! I'd love to grab coffee with you.",
      text: "We had a great time chatting over coffee.",
      affection: 5,
      trust: 3
    },
    no: {
      playerResponse: "I'm sorry, I can't right now. Maybe another time?",
      text: "{name} looks a bit disappointed but understands.",
      affection: -3
    }
  },
  {
    prompt: "{name} asks if you want to watch a movie tonight. Are you in?",
    yes: {
      playerResponse: "Absolutely, movie night sounds perfect!",
      text: "Movie night was cozy and fun.",
      affection: 4,
      trust: 2
    },
    no: {
      playerResponse: "I'm not really in the mood tonight, sorry.",
      text: "{name} seems let down but says maybe next time.",
      affection: -2
    }
  },
  {
    prompt: "{name} invites you to meet some friends. Do you want to go?",
    yes: {
      playerResponse: "I'd be happy to meet your friends!",
      text: "You had a good time meeting {name}'s friends.",
      affection: 6,
      trust: 5
    },
    no: {
      playerResponse: "I'm not quite ready for that yet.",
      text: "{name} is understanding but seems a little hurt.",
      affection: -4,
      trust: -2
    }
  },
  {
    prompt: "{name} suggests trying a new restaurant. Want to join?",
    yes: {
      playerResponse: "Sure, let's try it together!",
      text: "The food was amazing and the company even better.",
      affection: 5,
      trust: 2
    },
    no: {
      playerResponse: "I'll have to pass this time, but thanks for asking.",
      text: "{name} goes alone and tells you about it later.",
      affection: -2
    }
  },
  {
    prompt: "{name} wants to take a spontaneous road trip this weekend. Are you down?",
    yes: {
      playerResponse: "I'm so down for an adventure!",
      text: "The adventure brought you closer together.",
      affection: 8,
      trust: 4,
      chaos: 5
    },
    no: {
      playerResponse: "I can't make it this weekend, sorry.",
      text: "{name} respects your decision but seems bummed.",
      affection: -3,
      chaos: -2
    }
  },
  {
    prompt: "{name} asks if you want to help pick out a new outfit. Do you go shopping?",
    yes: {
      playerResponse: "Yes! Let's go pick something out.",
      text: "You had fun styling {name} and got their trust.",
      affection: 4,
      trust: 3
    },
    no: {
      playerResponse: "I'm not really a shopping person, sorry.",
      text: "{name} shops alone and shows you the outfit later.",
      affection: -1
    }
  },
  {
    prompt: "{name} suggests cooking dinner together. Are you interested?",
    yes: {
      playerResponse: "That sounds wonderful, I'm in!",
      text: "Cooking together was messy but romantic.",
      affection: 6,
      trust: 3
    },
    no: {
      playerResponse: "I'm not hungry right now, but thank you.",
      text: "{name} cooks alone and seems a bit lonely.",
      affection: -3
    }
  },
  {
    prompt: "{name} wants to go stargazing tonight. Will you come along?",
    yes: {
      playerResponse: "I'd love to go stargazing with you!",
      text: "The night sky was beautiful, and so was the moment.",
      affection: 7,
      trust: 4
    },
    no: {
      playerResponse: "I'd rather stay in today.",
      text: "{name} goes alone and texts you a picture of the stars.",
      affection: -2
    }
  },
  {
    prompt: "{name} asks if you want to play video games together. Do you join?",
    yes: {
      playerResponse: "Yeah, let's play together!",
      text: "You had a blast gaming together.",
      affection: 5,
      chaos: 3
    },
    no: {
      playerResponse: "I'm not really feeling it right now.",
      text: "{name} plays solo and wins without you.",
      affection: -2,
      chaos: -1
    }
  },
  {
    prompt: "{name} wants to go for a late-night walk. Are you coming?",
    yes: {
      playerResponse: "I'd love to go for a walk.",
      text: "The quiet walk under the streetlights felt intimate.",
      affection: 6,
      trust: 5
    },
    no: {
      playerResponse: "I'd rather stay in today.",
      text: "{name} walks alone, listening to music.",
      affection: -3,
      trust: -1
    }
  }
];

const EndingsByType = {
  chaotic: {
    perfect:
      "Keiran grins wide, eyes bright. \"You kept up with me and never tried to tame me. You're my favorite kind of disaster.\"",
    chaotic:
      "Keiran laughs breathlessly. \"We burned everything down together—and I loved every second. Guess we were always built for mayhem.\"",
    noAffection:
      "Keiran shrugs, a rare softness fading. \"If there's no spark left, there's nothing to crash. I'm out before it turns boring.\"",
    noTrust:
      "Keiran's smile disappears. \"You never trusted me. Without trust, there's no thrill—just wreckage. We're done.\"",
    breakup:
      "Keiran's grin fades to something quieter. \"Running away first? Guess you're more chaotic than I thought. Can't say I didn't see it coming.\" He turns without looking back."
  },
  loyal: {
    perfect:
      "Beau pulls you close. \"I knew if we stayed patient, we'd build something unshakeable. I'm never letting go.\"",
    chaotic:
      "Beau exhales, half-laughing. \"We made a storm together, and somehow it still feels like home. Guess devotion survives anything.\"",
    noAffection:
      "Beau's eyes dim. \"I can't give you my whole heart if yours isn't here. I hope you find what you're looking for.\"",
    noTrust:
      "Beau steps back. \"Without trust, love can't breathe. I won't beg for faith that isn't there. Goodbye.\"",
    breakup:
      "Beau's face falls, but he nods slowly. \"If that's what you need... I won't hold you back. I just wish we'd had more time.\" His voice cracks as he walks away."
  },
  nerdy: {
    perfect:
      "Lysander adjusts his glasses, smiling. \"Statistically improbable, emotionally undeniable. You're my favorite anomaly.\"",
    chaotic:
      "Lysander blushes through a grin. \"This data set is wild, but the outcome is clear—I'm hopelessly into you, chaos and all.\"",
    noAffection:
      "Lysander bites his lip. \"When the affection variable hits zero, the equation collapses. I have to protect my heart.\"",
    noTrust:
      "Lysander stiffens. \"If you don't trust me, every calculation fails. I can't keep solving for a future that isn't real.\"",
    breakup:
      "Lysander removes his glasses and cleans them slowly. \"I... I calculated so many scenarios, but this one still hurts. I hope your next equation works out better than ours.\""
  },
  athletic: {
    perfect:
      "Oren flashes a confident smile. \"We trained through every setback and came out stronger. You're my victory lap.\"",
    chaotic:
      "Oren laughs, exhilarated. \"We pushed past every limit—messy, intense, unforgettable. I'd choose this rush again.\"",
    noAffection:
      "Oren's jaw tightens. \"I can't lead this team alone. If your heart's not in it, I won't force the play. Game over.\"",
    noTrust:
      "Oren crosses his arms. \"Without trust, there's no teamwork. I won't compete against the person I'm supposed to run with.\"",
    breakup:
      "Oren's confident smile falters. \"Alright. I respect your call. We had a good run while it lasted.\" He turns and jogs away without another word."
  },
  mysterious: {
    perfect:
      "Jensen's guard finally lowers. \"You saw past every shadow and still chose me. That kind of faith is rare. I'm yours.\"",
    chaotic:
      "Jensen smirks. \"We danced on the edge and never looked down. For someone who hates exposure, I let you see everything.\"",
    noAffection:
      "Jensen looks away. \"If your heart's gone, there's no mystery to solve. I vanish before I become a ghost in your life.\"",
    noTrust:
      "Jensen's voice hardens. \"Trust was the only secret that mattered. Without it, I retreat to the dark. Don't follow.\"",
    breakup:
      "Jensen's expression goes cold, unreadable. \"So that's it, then. You got close enough to see the real me, and now you're running.\" He disappears into the shadows without waiting for a response."
  },
  default: {
    perfect: "A perfect ending unfolds—warm, certain, and entirely yours.",
    chaotic: "A whirlwind ending spins you both into a thrilling, unforgettable mess.",
    noAffection: "With affection gone, the connection dissolves into quiet distance.",
    noTrust: "Without trust, the bond fractures beyond repair.",
    breakup: "It ends here."
  }
};

let hoverSound = null;
let hoverSound2 = null;
let confirmSound = null;
let selectSound = null;
let backSound = null;
let interactionSound = null;
let traitHoverSound = null;
let tapSound = null;
let soundsPrimed = false;
let bgMusic = null;
let bgMusicFadeTimer = null;
let bgMusicFaded = false;

const VoiceEffects = {
  kiss: [
    "assets/ve/AudioElkGrunt1.wav",
    "assets/ve/AudioElkGrunt2.wav",
    "assets/ve/AudioElkGrunt3.wav",
    "assets/ve/AudioElkGrunt4.wav",
    "assets/ve/MaleMoan1.wav",
    "assets/ve/AudioElkMaleKiss1.wav",
    "assets/ve/MaleBaby1.wav",
    "assets/ve/MaleKiss1.wav",
    "assets/ve/MaleKiss2.wav",
    "assets/ve/MaleMoan2.wav",
    "assets/ve/MaleMoan3.wav",
    "assets/ve/AudioElkPant1.wav"
  ],
  argue: [
    "assets/ve/Annoyed1.wav",
    "assets/ve/Annoyed2.wav",
    "assets/ve/Annoyed3.wav",
    "assets/ve/Annoyed4.wav",
    "assets/ve/Annoyed5.wav",
    "assets/ve/Annoyed6.wav",
    "assets/ve/Annoyed7.wav",
    "assets/ve/DanBosleyAnnoyed1.wav",
    "assets/ve/DillonBeckerArgue1.wav",
    "assets/ve/DillonBeckerArgue2.wav",
    "assets/ve/DillonBeckerArgue3.wav",
    "assets/ve/Argue1.wav"
  ],
  flirt: [
    "assets/ve/AudioElkBreathyYeah1.wav",
    "assets/ve/MaleSigh1.wav",
    "assets/ve/MaleSigh2.wav",
    "assets/ve/MaleSigh3.wav",
    "assets/ve/MaleYeah2.wav",
    "assets/ve/MaleYeah3.wav",
    "assets/ve/MaleYeah4.wav",
    "assets/ve/MaleBreath1.wav",
    "assets/ve/AudioElkMaleYeah1.wav"
  ],
  tease: [
    "assets/ve/Chuckle1.wav",
    "assets/ve/Chuckle2.wav",
    "assets/ve/Chuckle3.wav",
    "assets/ve/Chuckle4.wav",
    "assets/ve/Chuckle5.wav",
    "assets/ve/Tease1.wav",
    "assets/ve/Tease2.wav",
    "assets/ve/Tease3.wav",
    "assets/ve/Tease4.wav",
    "assets/ve/Tease5.wav"
  ],
  talk: [

    "assets/ve/DillonBeckerTalk6.wav",
    "assets/ve/MaleTalk1.wav",
    "assets/ve/MaleTalk2.wav",
    "assets/ve/MaleTalk3.wav",
    "assets/ve/MaleTalk4.wav",
    "assets/ve/MaleTalk5.wav",
    "assets/ve/MaleTalk6.wav",
    "assets/ve/MaleTalk7.wav",
    "assets/ve/MaleTalk8.wav"
  ]
};

function setBodyBackground(typeKey) {
  if (!baseBodyClass) {
    baseBodyClass = document.body.className;
    baseBodyBg = document.body.style.backgroundImage;
  }
  if (typeKey && BoyfriendBackgrounds[typeKey]) {
    document.body.className = baseBodyClass;
    document.body.style.backgroundImage = BoyfriendBackgrounds[typeKey];
  } else {
    document.body.className = baseBodyClass;
    document.body.style.backgroundImage = baseBodyBg;
  }
}

// --- PREF FORM SCREEN ---
function renderPrefForm(root) {
  root.innerHTML = `
    <div class="relative quiz-vignette">
      <div class="quiz-frame relative">
        <div class="flex justify-between items-center mb-3">
          ${
            state.quizStage === "player" && state.currentQuestion === 0
              ? `<button id="vb-quiz-back-start" class="vb-hover-shrink px-4 py-2 bg-white/70 hover:bg-white text-purple-700 rounded-full border-2 border-white shadow-md font-semibold text-xs md:text-sm">← Back</button>`
              : `<span></span>`
          }
        </div>
        <div class="vb-blur-content ${state.showMenu ? "is-blurred" : ""}">
        <div class="text-center mb-8">
          <div class="vb-banner-wrap px-5 py-3">
            <div class="relative inline-block vb-banner-shell px-5 py-3">
              <div class="absolute inset-0 bg-white/30 blur-sm"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 opacity-60"></div>
              <div class="relative z-10 py-2">
                <h2 class="vb-script vb-banner-text vb-banner-title font-bold text-transparent bg-clip-text drop-shadow-2xl mb-0">
                  Tell us a bit more
                </h2>
                <p class="vb-subheader-text text-white font-semibold text-sm md:text-base drop-shadow leading-tight">
                  A few quick preferences before we start.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-2xl mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-8 border border-white/60">
          <div class="grid gap-4">
            <label class="text-sm font-semibold text-purple-800 flex flex-col gap-2 items-center text-center">
              <span>What is your favorite color?</span>
              <input id="vb-pref-color" class="w-full px-4 py-2 rounded-full border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none bg-white/90 text-purple-900" value="${state.prefAnswers.color || ""}">
            </label>
            <label class="text-sm font-semibold text-purple-800 flex flex-col gap-2 items-center text-center">
              <span>What is one thing that makes you happy?</span>
              <input id="vb-pref-happy" class="w-full px-4 py-2 rounded-full border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none bg-white/90 text-purple-900" value="${state.prefAnswers.happy || ""}">
            </label>
            <label class="text-sm font-semibold text-purple-800 flex flex-col gap-2 items-center text-center">
              <span>What is your favorite edible treat?</span>
              <input id="vb-pref-treat" class="w-full px-4 py-2 rounded-full border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none bg-white/90 text-purple-900" value="${state.prefAnswers.treat || ""}">
            </label>
            <label class="text-sm font-semibold text-purple-800 flex flex-col gap-2 items-center text-center">
              <span>What is one thing that makes you feel safe?</span>
              <input id="vb-pref-safe" class="w-full px-4 py-2 rounded-full border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none bg-white/90 text-purple-900" value="${state.prefAnswers.safe || ""}">
            </label>
            <label class="text-sm font-semibold text-purple-800 flex flex-col gap-2 items-center text-center">
              <span>Choose a name that you really like.</span>
              <input id="vb-pref-name" class="w-full px-4 py-2 rounded-full border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none bg-white/90 text-purple-900" value="${state.prefAnswers.likedName || ""}">
            </label>
          </div>

        <div class="flex justify-center mt-6">
          <button id="vb-pref-continue" class="quiz-option vb-hover-pulse relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-b from-white/90 to-white/40 text-purple-700 border-2 border-white/70 shadow-md hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:border-purple-300 transition-all">
            <span class="text-lg font-semibold">Continue</span>
          </button>
        </div>
        </div>
        </div>
      </div>
    </div>
    ${state.showDeleteConfirm
      ? `
    <div class="vb-modal-backdrop">
      <div class="vb-modal text-center">
        <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-2">Delete all data?</h3>
        <p class="text-sm md:text-base text-gray-700 mb-4">Are you sure you want to delete all saved data?</p>
        <div class="flex justify-center gap-3">
          <button id="vb-delete-yes" class="vb-modal-btn px-4 py-2 rounded-full text-white bg-gradient-to-r from-rose-500 to-rose-600 shadow font-semibold">Yes</button>
          <button id="vb-delete-no" class="vb-modal-btn px-4 py-2 rounded-full text-gray-700 bg-white shadow border font-semibold">No</button>
        </div>
      </div>
    </div>
      `
      : ""
    }
  `;

  const continueBtn = root.querySelector("#vb-pref-continue");
  const colorInput = root.querySelector("#vb-pref-color");
  const happyInput = root.querySelector("#vb-pref-happy");
  const treatInput = root.querySelector("#vb-pref-treat");
  const safeInput = root.querySelector("#vb-pref-safe");
  const nameInput = root.querySelector("#vb-pref-name");

  const goNext = () => {
    state.prefAnswers = {
      color: colorInput?.value || "",
      happy: happyInput?.value || "",
      treat: treatInput?.value || "",
      safe: safeInput?.value || "",
      likedName: nameInput?.value || ""
    };
    const missing = Object.values(state.prefAnswers).some((v) => !v.trim());
    if (missing) {
      showPrefErrorModal();
      return;
    }
    state.prefCollected = true;
    state.playerArchetypeQuestion = 0;
    state.playerArchetypeScores = {
      Quirky: 0,
      Motherly: 0,
      Icy: 0,
      Difficult: 0,
      Bubbly: 0
    };
    state.playerArchetypeDone = !!state.playerArchetype;
    state.quizStage = state.playerArchetypeDone ? "boy" : "player";
    state.showPlayerToBoyTransition = false;
    render();
  };

  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      ensureBgMusicPlaying();
      continueBtn.classList.remove("vb-quiz-press");
      void continueBtn.offsetWidth;
      continueBtn.classList.add("vb-quiz-press");
      setTimeout(goNext, 150);
    });
  }

  [colorInput, happyInput, treatInput, safeInput, nameInput].forEach((el) => {
    if (el) {
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          goNext();
        }
      });
    }
  });

  // handle delete confirm from global menu on this screen
  const deleteYes = root.querySelector("#vb-delete-yes");
  const deleteNo = root.querySelector("#vb-delete-no");
  if (deleteYes && deleteNo) {
    deleteYes.classList.add("vb-modal-btn");
    deleteNo.classList.add("vb-modal-btn");
    deleteYes.addEventListener("click", (e) => {
      e.stopPropagation();
      const y = window.scrollY;
      deleteAllData();
      state.showDeleteConfirm = false;
      state.showMenu = false;
      render();
      requestAnimationFrame(() => window.scrollTo(0, y));
    });
    deleteNo.addEventListener("click", (e) => {
      e.stopPropagation();
      const y = window.scrollY;
      state.showDeleteConfirm = false;
      playBackSound();
      render();
      requestAnimationFrame(() => window.scrollTo(0, y));
    });
  }

  const backStartBtn = root.querySelector("#vb-quiz-back-start");
  if (backStartBtn) {
    backStartBtn.addEventListener("click", () => {
      const y = window.scrollY;

      // Check if player has matched with a boyfriend before (permanent save)
      const hasMatchedBefore = state.playerProfile?.hasMatchedBefore === true;

      // If they've matched before, keep their name and reset the quiz
      if (hasMatchedBefore && state.playerProfile?.name) {
        state.quizStarted = false;
        state.prefCollected = false;
        state.showMenu = false;
        state.showDeleteConfirm = false;
        state.currentQuestion = 0;
        state.quizStage = "player";
        state.playerArchetypeDone = false;
        state.playerArchetypeScores = {
          Quirky: 0,
          Motherly: 0,
          Icy: 0,
          Difficult: 0,
          Bubbly: 0
        };
        render();
        requestAnimationFrame(() => window.scrollTo(0, y));
        return;
      }

      // For first-time users or those who haven't matched yet:
      // Keep the name in memory (so input field preserves it) but don't save to localStorage
      // This allows them to change it if they go back
      const temporaryName = state.playerProfile?.name;
      state.playerProfile = temporaryName ? { name: temporaryName } : null;
      state.quizStarted = false;
      state.prefCollected = false;
      state.showMenu = false;
      state.showDeleteConfirm = false;
      state.currentQuestion = 0;
      state.quizStage = "player";
      state.playerArchetypeDone = false;
      state.playerArchetypeScores = {
        Quirky: 0,
        Motherly: 0,
        Icy: 0,
        Difficult: 0,
        Bubbly: 0
      };
      render();
      requestAnimationFrame(() => window.scrollTo(0, y));
    });
  }
}

function showPrefErrorModal() {
  const backdrop = document.createElement("div");
  backdrop.className = "vb-modal-backdrop";
  backdrop.innerHTML = `
    <div class="vb-modal text-center">
      <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-2">Bold move submitting nothing.</h3>
      <p class="text-sm md:text-base text-gray-700 mb-4">
        Unfortunately the compatibility algorithm requires actual data to work.
        Please fill out the preference fields before continuing.
      </p>
      <button id="vb-pref-error-close" class="vb-modal-btn px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow">
        Dismiss
      </button>
    </div>
  `;
  document.body.appendChild(backdrop);
  const closeBtn = backdrop.querySelector("#vb-pref-error-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      closeBtn.classList.remove("vb-modal-press", "vb-modal-selected");
      void closeBtn.offsetWidth;
      closeBtn.classList.add("vb-modal-press", "vb-modal-selected");
      const modalBox = backdrop.querySelector(".vb-modal");
      if (backdrop) backdrop.classList.add("vb-modal-hide");
      if (modalBox) modalBox.classList.add("vb-modal-hide");
      setTimeout(() => {
        backdrop.remove();
      }, 320);
    });
  }
}

// --- PLAYER ARCHETYPE QUIZ ---
function renderPlayerArchetype(root) {
  const q = PlayerQuestions[state.playerArchetypeQuestion];
  const total = PlayerQuestions.length;
  const answered = state.playerArchetypeQuestion;
  const percent = Math.round((answered / total) * 100);

  const progressHearts = PlayerQuestions.map((_, idx) => {
    const filled = idx < answered;
    const fillColor = filled ? "currentColor" : "none";
    return `
      <span class="heart-icon vb-progress-heart ${filled ? "filled" : ""}" aria-hidden="true">
        <svg width="24" height="22" viewBox="0 0 24 22" fill="${fillColor}" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20s-6.5-4.1-9.2-8C0.2 9.1 0.5 4.8 3.7 3 6.8 1.3 9.9 3 12 5.4 14.1 3 17.2 1.3 20.3 3 23.5 4.8 23.8 9.1 21.2 12c-2.7 3.9-9.2 8-9.2 8Z" fill="${fillColor}"/>
        </svg>
      </span>
    `;
  }).join("");

  root.innerHTML = `
    <div class="relative quiz-vignette">
      <div class="quiz-frame relative">
        <div class="flex justify-between items-center mb-3">
          ${
            state.playerArchetypeQuestion === 0
              ? `<button id="vb-archetype-back-prefs" class="vb-hover-shrink px-4 py-2 bg-white/70 hover:bg-white text-purple-700 rounded-full border-2 border-white shadow-md font-semibold text-xs md:text-sm">← Back</button>`
              : `<button id="vb-archetype-back-question" class="vb-hover-shrink px-4 py-2 bg-white/70 hover:bg-white text-purple-700 rounded-full border-2 border-white shadow-md font-semibold text-xs md:text-sm">← Back</button>`
          }
          <span></span>
        </div>

        <div class="text-center mb-8">
          <div class="vb-banner-wrap px-5 py-3">
            <span class="vb-banner-heart tl">♡️</span>
            <span class="vb-banner-heart br">♡️</span>
            <span class="vb-banner-heart-small tl">♡️</span>
            <span class="vb-banner-heart-small br">♡️</span>
            <div class="relative inline-block vb-banner-shell px-5 py-3">
              <div class="absolute inset-0 bg-white/30 blur-sm"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 opacity-60"></div>
              <div class="relative z-10 py-2">
                <h1 class="vb-script vb-banner-text vb-banner-title font-bold text-transparent bg-clip-text drop-shadow-2xl mb-0">
                  Algorithmically Yours
                </h1>
                <div class="flex items-center justify-center gap-1 -mt-1">
                  <div class="vb-sparkle-dot"></div>
                  <div class="vb-sparkle-dot"></div>
                  <p class="vb-subheader-text text-white font-semibold text-base md:text-lg drop-shadow leading-tight">
                    Because real men are... complicated.
                  </p>
                  <div class="vb-sparkle-dot"></div>
                  <div class="vb-sparkle-dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="vb-quiz-card quiz-step is-entering">
          <div class="vb-question-pill bg-white/70 rounded-full border border-white/60 px-5 py-4 text-center">
            <div class="flex items-center justify-center gap-2 mb-2">
              <div class="vb-sparkle-dot"></div>
              <p class="text-xs uppercase tracking-wide text-purple-600 font-bold">You, in a nutshell</p>
              <div class="vb-sparkle-dot"></div>
            </div>
            <h3 class="question-title vb-question-text text-lg md:text-xl font-bold">${q.question}</h3>
            <div class="progress-pill mt-3 inline-flex items-center gap-2">
              <span class="text-xs font-semibold text-purple-700">Self-scan ${percent}%</span>
            </div>
            <div class="vb-progress-hearts mt-2">${progressHearts}</div>
          </div>

          <div class="grid grid-cols-2 gap-3 mt-6">
            ${q.options
              .map(
                (opt, idx) => `
                  <button data-player-option="${idx}" data-player-type="${opt.type}"
                    class="quiz-option vb-quiz-press bg-gradient-to-b from-white/90 to-white/40 border border-white/70 rounded-full px-4 py-3 text-sm md:text-base font-semibold text-purple-800 shadow hover:bg-white/90 transition"
                  >
                    ${opt.text}
                  </button>
                `
              )
              .join("")}
          </div>
        </div>
        </div>
      </div>
    </div>
    ${state.showDeleteConfirm
      ? `
    <div class="vb-modal-backdrop">
      <div class="vb-modal text-center">
        <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-2">Delete all data?</h3>
        <p class="text-sm md:text-base text-gray-700 mb-4">Are you sure you want to delete all saved data?</p>
        <div class="flex justify-center gap-3">
          <button id="vb-delete-yes" class="vb-modal-btn px-4 py-2 rounded-full text-white bg-gradient-to-r from-rose-500 to-rose-600 shadow font-semibold">Yes</button>
          <button id="vb-delete-no" class="vb-modal-btn px-4 py-2 rounded-full text-gray-700 bg-white shadow border font-semibold">No</button>
        </div>
      </div>
    </div>
      `
      : ""
    }
  `;

  // Back button to return to preferences (only on first question)
  const backPrefsBtn = root.querySelector("#vb-archetype-back-prefs");
  if (backPrefsBtn) {
    backPrefsBtn.addEventListener("click", () => {
      const y = window.scrollY;
      // Go back to preferences screen, preserving prefAnswers and resetting archetype quiz
      state.prefCollected = false;
      state.playerArchetypeQuestion = 0;
      // Note: state.prefAnswers is preserved automatically, no need to clear it
      render();
      requestAnimationFrame(() => window.scrollTo(0, y));
    });
  }

  // Back button to go to previous player archetype question (questions 1-4)
  const backQuestionBtn = root.querySelector("#vb-archetype-back-question");
  if (backQuestionBtn) {
    backQuestionBtn.addEventListener("click", () => {
      const y = window.scrollY;
      if (state.playerArchetypeQuestion > 0) {
        state.playerArchetypeQuestion -= 1;
        // Decrease the score for the type that was selected on the question we're going back from
        // We need to track which answer was selected to properly undo it
        // For now, just go back without adjusting scores since we don't track individual answers
        render();
        requestAnimationFrame(() => window.scrollTo(0, y));
      }
    });
  }

  root.querySelectorAll("[data-player-option]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-player-type");
      btn.classList.remove("vb-quiz-press");
      void btn.offsetWidth;
      btn.classList.add("vb-quiz-press");
      setTimeout(() => handlePlayerArchetypeAnswer(type), 180);
    });
  });
}

function handlePlayerArchetypeAnswer(type) {
  state.playerArchetypeScores = {
    ...state.playerArchetypeScores,
    [type]: (state.playerArchetypeScores[type] || 0) + 1
  };

  if (state.playerArchetypeQuestion < PlayerQuestions.length - 1) {
    state.playerArchetypeQuestion += 1;
    render();
  } else {
    const winner = Object.keys(state.playerArchetypeScores).reduce(
      (best, key) =>
        state.playerArchetypeScores[key] > state.playerArchetypeScores[best] ? key : best
    );
    state.playerArchetype = winner;
    state.playerArchetypeDone = true;
    if (state.playerProfile) {
      state.playerProfile.playerArchetype = winner;
      saveProfile();
    }
    render();
  }
}

// --- SECRET FORM SCREEN ---
function renderSecretForm(root) {
  root.innerHTML = `
    <div class="relative quiz-vignette">
      <div class="quiz-frame relative vb-fade-in">
        <div class="vb-blur-content ${state.showMenu ? "is-blurred" : ""}">
        <div class="text-center mb-8">
          <div class="vb-banner-wrap px-5 py-3">
            <div class="relative inline-block vb-banner-shell px-5 py-3">
              <div class="absolute inset-0 bg-white/30 blur-sm"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 opacity-60"></div>
              <div class="relative z-10 py-2">
                <h2 class="vb-script vb-banner-text vb-banner-title font-bold text-transparent bg-clip-text drop-shadow-2xl mb-0">
                  Almost there
                </h2>
                <p class="vb-subheader-text text-white font-semibold text-sm md:text-base drop-shadow leading-tight">
                  One last thing before we match you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-xl mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-7 border border-white/60">
          <label class="text-sm font-semibold text-purple-800 flex flex-col gap-3 items-center text-center">
            <span>What is one thing you wish more people understood about you?</span>
            <input id="vb-secret" class="w-full px-4 py-2 rounded-full border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none bg-white/90 text-purple-900" value="${state.playersecret || ""}">
          </label>

          <div class="flex justify-center mt-6">
            <button type="button" id="vb-secret-continue" class="quiz-option vb-hover-pulse relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-b from-white/90 to-white/40 text-purple-700 border-2 border-white/70 shadow-md hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:border-purple-300 transition-all">
              <span class="text-lg font-semibold">Continue</span>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  `;

  const secretInput = root.querySelector("#vb-secret");
  const continueBtn = root.querySelector("#vb-secret-continue");

  const finish = () => {
    const secretVal = secretInput ? secretInput.value.trim() : "";
    if (!secretVal) {
      showSecretErrorModal();
      return;
    }
    state.playersecret = convertSecret(secretVal);
    if (state.playerProfile) {
      state.playerProfile.playersecret = convertSecret(secretVal);
      saveProfile();
    }
    // if we're mid player stage, go back to player flow
    if (!state.playerArchetypeDone) {
      state.showSecretForm = false;
      state.quizStage = "player";
      render();
      return;
    }
    // if boyfriend quiz already finished and secret was the last step, go straight to match
    if (state.quizStage === "boy") {
      state.showSecretForm = false;
      finishMatch();
      return;
    }
    // otherwise transition to boyfriend quiz
    state.showSecretForm = false;
    state.quizStage = "boy";
    state.showPlayerToBoyTransition = true;
    state.currentQuestion = 0;
    state.quizHistory = [];
    render();
  };

  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      continueBtn.classList.remove("vb-quiz-press");
      void continueBtn.offsetWidth;
      continueBtn.classList.add("vb-quiz-press");
      setTimeout(finish, 150);
    });
  }
  if (secretInput) {
    secretInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        finish();
      }
    });
  }
}

function showSecretErrorModal() {
  const backdrop = document.createElement("div");
  backdrop.className = "vb-modal-backdrop";
  backdrop.innerHTML = `
    <div class="vb-modal text-center">
      <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-2">Keeping secrets already?</h3>
      <p class="text-sm md:text-base text-gray-700 mb-4">
        Mysterious. Bold. Unhelpful. Now try again.
      </p>
      <button id="vb-secret-error-close" class="vb-modal-btn px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow">
        Dismiss
      </button>
    </div>
  `;
  document.body.appendChild(backdrop);
  const closeBtn = backdrop.querySelector("#vb-secret-error-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      closeBtn.classList.remove("vb-modal-press", "vb-modal-selected");
      void closeBtn.offsetWidth;
      closeBtn.classList.add("vb-modal-press", "vb-modal-selected");
      const modalBox = backdrop.querySelector(".vb-modal");
      if (backdrop) backdrop.classList.add("vb-modal-hide");
      if (modalBox) modalBox.classList.add("vb-modal-hide");
      setTimeout(() => {
        backdrop.remove();
      }, 320);
    });
  }
}

function renderPlayerToBoyTransition(root) {
  root.innerHTML = `
    <div class="relative quiz-vignette">
      <div class="quiz-frame relative vb-fade-in">
        <div class="vb-blur-content ${state.showMenu ? "is-blurred" : ""}">
        <div class="flex justify-between items-center mb-3">
          <button id="vb-transition-back" class="vb-hover-shrink px-4 py-2 bg-white/70 hover:bg-white text-purple-700 rounded-full border-2 border-white shadow-md font-semibold text-xs md:text-sm">← Back</button>
          <span></span>
        </div>
        <div class="text-center mb-8">
          <div class="vb-banner-wrap px-5 py-3">
            <div class="relative inline-block vb-banner-shell px-5 py-3">
              <div class="absolute inset-0 bg-white/30 blur-sm"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 opacity-60"></div>
              <div class="relative z-10 py-2">
                <h2 class="vb-script vb-banner-text vb-banner-title font-bold text-transparent bg-clip-text drop-shadow-2xl mb-0">
                  Now tell us about your tastes
                </h2>
                <p class="vb-subheader-text text-white font-semibold text-sm md:text-base drop-shadow leading-tight">
                  We'll find your perfect match next.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            type="button"
            id="vb-transition-continue"
            class="quiz-option vb-hover-pulse relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-b from-white/90 to-white/30 text-purple-700 border-2 border-white/70 shadow-md hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:border-purple-300 transition-all"
          >
            <span class="text-lg font-semibold">Continue</span>
          </button>
        </div>
        </div>
      </div>
    </div>
  `;

  const backBtn = root.querySelector("#vb-transition-back");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      const y = window.scrollY;
      // Ensure we have the stored player history
      if (!state.playerQuizHistory || !state.playerQuizHistory.length) {
        state.playerQuizHistory = state.quizHistory.slice();
      }
      // Go back to the last player question in the player flow
      state.showPlayerToBoyTransition = false;
      state.quizStage = "player";
      state.playerArchetypeDone = false;
      state.quizHistory = state.playerQuizHistory.slice();
      // Jump to final player question index (includes player slider questions)
      const lastIndex = PlayerSliderQuestions.length + PlayerQuestions.length - 1;
      state.currentQuestion = Math.max(0, lastIndex);
      render();
      requestAnimationFrame(() => window.scrollTo(0, y));
    });
  }

  const btn = root.querySelector("#vb-transition-continue");
  if (btn) {
    btn.addEventListener("click", () => {
      btn.classList.remove("vb-quiz-press");
      void btn.offsetWidth;
      btn.classList.add("vb-quiz-press");
      setTimeout(() => {
        ensureBgMusicPlaying();
        state.showPlayerToBoyTransition = false;
        // Keep player history intact, but start fresh history for boyfriend stage
        state.playerQuizHistory = state.playerQuizHistory.length
          ? state.playerQuizHistory
          : state.quizHistory.slice();
        state.quizStage = "boy";
        state.currentQuestion = 0;
        state.quizHistory = [];
        render();
      }, 180);
    });
  }
}

// --- RENDER ROOT ---

function render() {
  const root = document.getElementById("app");
  if (!root) return;
  root.innerHTML = "";

  if (state.gameState === "quiz") {
    setBodyBackground(null);
    if (!state.quizStarted) {
      renderStart(root);
    } else if (!state.prefCollected) {
      renderPrefForm(root);
    } else if (state.showSecretForm) {
      renderSecretForm(root);
    } else if (state.showPlayerToBoyTransition) {
      renderPlayerToBoyTransition(root);
    } else {
      renderQuiz(root);
    }
  } else if (state.gameState === "game") {
    renderGame(root);
  } else if (state.gameState === "ending") {
    setBodyBackground(null);
    renderEnding(root);
  }
  ensureDisclaimerFooter();
  ensureGlobalMenu();
}

function renderStart(root) {
  const hasActiveRun =
    !!(state.playerProfile?.currentRun &&
       state.playerProfile.currentRun.active &&
       state.playerProfile.currentRun.boyfriendType &&
       BoyfriendsData[state.playerProfile.currentRun.boyfriendType]);

  const hasMatchedBefore = state.playerProfile?.hasMatchedBefore === true;

  root.innerHTML = `
    <div class="relative quiz-vignette">
      <div class="quiz-frame relative">
        <div class="vb-blur-content ${state.showMenu ? "is-blurred" : ""}">
        <div class="text-center mb-8">
          <div class="vb-banner-wrap px-5 py-3">
            <span class="vb-banner-heart tl">♡</span>
            <span class="vb-banner-heart br">♡</span>
            <span class="vb-banner-heart-small tl">♡</span>
            <span class="vb-banner-heart-small br">♡</span>
            <div class="relative inline-block vb-banner-shell px-5 py-3">
              <div class="absolute inset-0 bg-white/30 blur-sm"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 opacity-60"></div>
              <div class="relative z-10 py-2">
                <h1 class="vb-script vb-banner-text vb-banner-title font-bold text-transparent bg-clip-text drop-shadow-2xl mb-0">
                  Algorithmically Yours
                </h1>
                <div class="flex items-center justify-center gap-1 -mt-1">
                  <div class="vb-sparkle-dot"></div>
                  <div class="vb-sparkle-dot"></div>
                  <p class="vb-subheader-text text-white font-semibold text-base md:text-lg drop-shadow leading-tight">
                    Because real men are... complicated.
                  </p>
                  <div class="vb-sparkle-dot"></div>
                  <div class="vb-sparkle-dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        ${
          hasMatchedBefore
            ? `
              <div class="flex flex-col items-center gap-2 mb-6 text-white">
                <p class="text-sm md:text-base font-semibold">Welcome back, ${state.playerProfile.name}!</p>
                ${hasActiveRun ? `<p class="text-xs md:text-sm text-white/80">Tap start to continue.</p>` : ''}
              </div>
            `
            : `
              <div class="flex flex-col items-center gap-3 mb-6">
                <label for="vb-player-name" class="text-white font-semibold text-sm md:text-base">What do you want to be called?</label>
                <input id="vb-player-name" maxlength="25" class="w-full max-w-sm px-4 py-2 rounded-full border border-white/70 bg-white/80 text-purple-800 font-semibold text-center shadow" placeholder="Enter your name" value="${state.playerProfile?.name || ""}">

              </div>
            `
        }

        <div class="flex flex-col items-center gap-3">
          <button
            id="vb-start-btn"
            class="quiz-option vb-hover-pulse relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-b from-white/90 to-white/30 text-purple-700 border-2 border-white/70 shadow-md hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:border-purple-300 transition-all"
          >
            <span class="text-lg font-semibold">Start</span>
          </button>
          <button
            id="vb-credits-btn"
            class="vb-hover-pulse px-6 py-2 rounded-full bg-white/60 text-purple-600 border border-white/50 shadow-sm hover:bg-white/80 hover:border-purple-300 transition-all text-sm font-medium"
          >
            Credits
          </button>
        </div>
        </div>
      </div>
    </div>
    ${
      state.showNameErrorModal
        ? `
    <div class="vb-modal-backdrop">
      <div class="vb-modal text-center">
        <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-2">Very funny.</h3>
        <p class="text-sm md:text-base text-gray-700 mb-4">Put a name.</p>
        <button id="vb-name-error-close" class="vb-modal-btn px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow">
          Okay
        </button>
      </div>
    </div>
        `
        : ""
    }
    ${state.showDeleteConfirm
      ? `
    <div class="vb-modal-backdrop">
      <div class="vb-modal text-center">
        <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-2">Delete all data?</h3>
        <p class="text-sm md:text-base text-gray-700 mb-4">Are you sure you want to delete all saved data?</p>
        <div class="flex justify-center gap-3">
          <button id="vb-delete-yes" class="vb-modal-btn px-4 py-2 rounded-full text-white bg-gradient-to-r from-rose-500 to-rose-600 shadow font-semibold">Yes</button>
          <button id="vb-delete-no" class="vb-modal-btn px-4 py-2 rounded-full text-gray-700 bg-white shadow border font-semibold">No</button>
        </div>
      </div>
    </div>
      `
      : ""
    }
    ${state.showCredits
      ? `
    <div class="vb-modal-backdrop">
      <div class="vb-modal text-center" style="max-width: 500px;">
        <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-4">Credits</h3>
        <div class="text-left text-sm md:text-base text-gray-700 space-y-3 mb-6">
          <div>
            <strong>Music:</strong><br>
            One Man Symphony
          </div>
          <div>
            <strong>Voice Effects:</strong><br>
            Dillon Becker<br>
            Dan Bosley<br>
            Audio Elk<br>
            Public Domain Voices
          </div>
          <div>
            <strong>Sound Effects:</strong><br>
            Freesound.org
          </div>
          <div>
            <strong>Boyfriend Art:</strong><br>
            Sutemo (Modified by J Claudee (Sraye))
          </div>
        </div>
        <button id="vb-credits-close" class="vb-modal-btn px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow hover:shadow-lg transition-all">
          Close
        </button>
      </div>
    </div>
      `
      : ""
    }
  `;
  primeHoverSounds();

  const startBtn = root.querySelector("#vb-start-btn");
  const nameInput = root.querySelector("#vb-player-name");
  const menuToggle = root.querySelector("#vb-menu-toggle");
  const deleteBtn = root.querySelector("#vb-delete-data");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const y = window.scrollY;
      state.showMenu = !state.showMenu;
      render();
      window.scrollTo(0, y);
    });
  }

  if (deleteBtn) {
    deleteBtn.addEventListener("click", () => {
      state.showDeleteConfirm = true;
      render();
    });
  }

  const obscene = ["asshole", "hitler", "fuck", "shit"];
  const isValidName = (val) => {
    if (!val) return false;
    if (val.length > 25) return false;
    if (/\d/.test(val)) return false;
    if (/\s/.test(val)) return false;
    const lower = val.toLowerCase();
    return !obscene.some((w) => lower.includes(w));
  };

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      const hasActiveRun =
        !!(state.playerProfile?.currentRun &&
           state.playerProfile.currentRun.active &&
           state.playerProfile.currentRun.boyfriendType &&
           BoyfriendsData[state.playerProfile.currentRun.boyfriendType]);

      ensureBgMusicPlaying();
      startBtn.classList.remove("vb-quiz-press");
      void startBtn.offsetWidth;
      startBtn.classList.add("vb-quiz-press");
      setTimeout(() => {
        // If there's an active run, load or resume it
        if (hasActiveRun) {
          const run = state.playerProfile.currentRun;
          if (run && run.active && run.boyfriendType && BoyfriendsData[run.boyfriendType]) {
            loadRun(run);
          } else {
            // fresh run for existing profile: clear per-run secret so we re-ask
            state.playersecret = "";
            if (state.playerProfile) {
              state.playerProfile.playersecret = "";
              saveProfile();
            }
            state.quizStarted = true;
            render();
          }
          return;
        }

        // Otherwise always validate and set the name so it stays editable until matching
        const nameVal = nameInput ? nameInput.value.trim() : "";
        if (!isValidName(nameVal)) {
          state.nameError = "Very funny. Put a name.";
          state.showNameErrorModal = true;
          render();
          return;
        }
        state.nameError = "";
        state.showNameErrorModal = false;
        // Store name temporarily in state, don't save to localStorage yet
        // It will be saved when they match with a boyfriend
        state.playerProfile = state.playerProfile || {};
        state.playerProfile.name = nameVal;
        state.playerProfile.endings = state.playerProfile.endings || [];
        state.playerProfile.currentRun = state.playerProfile.currentRun || {};
        state.playerProfile.settings = state.playerProfile.settings || {};
        state.playerProfile.playersecret = "";
        state.playersecret = "";
        // Fresh quiz state
        state.quizStage = "player";
        state.currentQuestion = 0;
        state.quizHistory = [];
        state.playerQuizHistory = [];
        state.playerArchetypeDone = false;
        // Don't save profile yet - only save when they match with boyfriend
        state.quizStarted = true;
        render();
      }, 200);
    });
  }
  // Allow pressing Enter in the name field to trigger Start
  if (nameInput && startBtn) {
    nameInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        startBtn.click();
      }
    });
  }

  const nameErrorBtn = root.querySelector("#vb-name-error-close");
  if (nameErrorBtn) {
    nameErrorBtn.addEventListener("click", () => {
      nameErrorBtn.classList.remove("vb-modal-press", "vb-modal-selected");
      void nameErrorBtn.offsetWidth;
      nameErrorBtn.classList.add("vb-modal-press", "vb-modal-selected");
      const backdrop = document.querySelector(".vb-modal-backdrop");
      const modalBox = document.querySelector(".vb-modal");
      if (backdrop) backdrop.classList.add("vb-modal-hide");
      if (modalBox) modalBox.classList.add("vb-modal-hide");
      setTimeout(() => {
        state.showNameErrorModal = false;
        state.nameError = "";
        render();
      }, 320);
    });
  }
  const deleteYes = root.querySelector("#vb-delete-yes");
  const deleteNo = root.querySelector("#vb-delete-no");
  if (deleteYes && deleteNo) {
    deleteYes.classList.add("vb-modal-btn");
    deleteNo.classList.add("vb-modal-btn");
    deleteYes.addEventListener("click", () => {
      deleteAllData();
      state.showDeleteConfirm = false;
      state.showMenu = false;
      render();
    });
    deleteNo.addEventListener("click", () => {
      playBackSound();
      state.showDeleteConfirm = false;
      render();
    });
  }

  const creditsBtn = root.querySelector("#vb-credits-btn");
  if (creditsBtn) {
    creditsBtn.addEventListener("click", () => {
      state.showCredits = true;
      render();
    });
  }

  const creditsClose = root.querySelector("#vb-credits-close");
  if (creditsClose) {
    creditsClose.addEventListener("click", () => {
      state.showCredits = false;
      render();
    });
  }

  if (state.showMenu) {
    const menuPop = root.querySelector(".vb-menu-pop");
    const closeHandler = (e) => {
      // Don't auto-close while a confirmation modal is open
      if (state.showDeleteConfirm) return;
      // Ignore clicks inside the delete modal/backdrop
      const modal = document.querySelector(".vb-modal-backdrop");
      if (modal && modal.contains(e.target)) return;
      const toggle = root.querySelector("#vb-menu-toggle");
      if (menuPop && menuPop.contains(e.target)) return;
      if (toggle && toggle.contains(e.target)) return;
      document.removeEventListener("click", closeHandler, true);
      const y = window.scrollY;
      state.showMenu = false;
      render();
      window.scrollTo(0, y);
    };
    setTimeout(() => document.addEventListener("click", closeHandler, true), 0);
  }
}

// --- HELPERS ---

function createStatBar(label, value, gradientClasses, key) {
  return `
    <div class="mb-4">
      <div class="flex justify-between mb-1">
        <span class="text-sm font-semibold text-white drop-shadow-md">${label}</span>
        <span class="text-sm font-bold text-white drop-shadow-md" data-bar-value="${key}">${value}%</span>
      </div>
      <div class="w-full bg-white/30 rounded-full h-3 shadow-inner">
        <div class="h-3 rounded-full bg-gradient-to-r ${gradientClasses} transition-all duration-500"
             data-bar="${key}" style="width: ${value}%;"></div>
      </div>
    </div>
  `;
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getPlayerName() {
  return state.playerProfile?.name || state.prefAnswers?.likedName || "you";
}

function personalize(text) {
  if (!text) return "";
  const prefs = state.prefAnswers || {};
  const map = {
    playerName: getPlayerName(),
    playerLikedName: prefs.likedName || "",
    playerColor: prefs.color || "",
    playerHappy: prefs.happy || "",
    playerTreat: prefs.treat || "",
    playerSafe: prefs.safe || "",
    playerSecret: state.playersecret || "",
    name: state.boyfriend?.name || ""
  };
  let out = text;
  Object.entries(map).forEach(([key, val]) => {
    const safeVal = val ?? "";
    out = out.replace(new RegExp(`\\$\\{${key}\\}`, "g"), safeVal);
  });
  // Also replace {name} format for universal events
  out = out.replace(/\{name\}/g, state.boyfriend?.name || "");
  return out;
}

function updateMenuBlur() {
  document.querySelectorAll(".vb-blur-content").forEach((el) => {
    el.classList.toggle("is-blurred", state.showMenu);
  });

  // Also update disclaimer blur
  const disclaimer = document.getElementById("vb-disclaimer");
  if (disclaimer) {
    if (state.showMenu) {
      disclaimer.classList.add("footer-blurred");
    } else {
      disclaimer.classList.remove("footer-blurred");
    }
  }
}

function showDeleteModal() {
  // Remove any existing delete modal
  const existing = document.getElementById("vb-delete-modal-global");
  if (existing) existing.remove();

  const backdrop = document.createElement("div");
  backdrop.id = "vb-delete-modal-global";
  backdrop.className = "vb-modal-backdrop";
  backdrop.innerHTML = `
    <div class="vb-modal text-center">
      <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-2">Delete all data?</h3>
      <p class="text-sm md:text-base text-gray-700 mb-4">Are you sure you want to delete all saved data?</p>
      <div class="flex justify-center gap-3">
        <button type="button" id="vb-delete-yes" class="vb-modal-btn px-4 py-2 rounded-full text-white bg-gradient-to-r from-rose-500 to-rose-600 shadow font-semibold">Yes</button>
        <button type="button" id="vb-delete-no" class="vb-modal-btn px-4 py-2 rounded-full text-gray-700 bg-white shadow border font-semibold">No</button>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);

  // Attach handlers after modal is in DOM
  const deleteYes = backdrop.querySelector("#vb-delete-yes");
  const deleteNo = backdrop.querySelector("#vb-delete-no");

  if (deleteYes) {
    deleteYes.onclick = async (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Remove modal first with fade-out animation
      backdrop.classList.add("vb-modal-hide");

      setTimeout(async () => {
        backdrop.remove();

        // Create white fade overlay
        const whiteFade = document.createElement("div");
        whiteFade.style.cssText = `
          position: fixed;
          inset: 0;
          background: white;
          z-index: 9999;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
          pointer-events: none;
        `;
        document.body.appendChild(whiteFade);

        // Start fading music and screen to white
        requestAnimationFrame(() => {
          whiteFade.style.opacity = "1";
        });

        // Fade out music (1200ms)
        fadeOutAudio(bgMusic, 1200);

        // Wait for white fade to complete (800ms)
        await new Promise(resolve => setTimeout(resolve, 800));

        // Delete data and render
        deleteAllData();
        state.showDeleteConfirm = false;
        state.showMenu = false;
        bgMusicFaded = false; // Reset so music can fade in again
        render();

        // Fade back from white (600ms)
        await new Promise(resolve => setTimeout(resolve, 50));
        whiteFade.style.opacity = "0";

        // Remove white overlay after fade completes
        setTimeout(() => {
          whiteFade.remove();
        }, 600);
      }, 180);
    };
  }

  if (deleteNo) {
    deleteNo.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      playBackSound();
      state.showDeleteConfirm = false;

      // Remove modal with fade-out animation
      backdrop.classList.add("vb-modal-hide");
      setTimeout(() => {
        backdrop.remove();
      }, 180);
    };
  }
}

function showAudioModal() {
  // Remove any existing audio modal
  const existing = document.getElementById("vb-audio-modal");
  if (existing) existing.remove();

  // Ensure sounds are initialized before interacting with the modal
  initHoverSound();

  const backdrop = document.createElement("div");
  backdrop.id = "vb-audio-modal";
  backdrop.className = "vb-modal-backdrop";
  backdrop.innerHTML = `
    <div class="vb-modal text-center">
      <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-4">Audio Settings</h3>
      <div class="space-y-3 mb-6">
        <div class="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-lg">
          <span class="text-sm font-semibold text-gray-700">Voice Effects</span>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" id="vb-toggle-voice" class="sr-only peer" ${state.audioSettings.voiceEffects ? 'checked' : ''}>
            <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
          </label>
        </div>
        <div class="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-lg">
          <span class="text-sm font-semibold text-gray-700">Sound Effects</span>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" id="vb-toggle-sound" class="sr-only peer" ${state.audioSettings.soundEffects ? 'checked' : ''}>
            <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
          </label>
        </div>
        <div class="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-lg">
          <span class="text-sm font-semibold text-gray-700">Background Music</span>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" id="vb-toggle-music" class="sr-only peer" ${state.audioSettings.backgroundMusic ? 'checked' : ''}>
            <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
          </label>
        </div>
      </div>
      <button type="button" id="vb-audio-dismiss" class="vb-modal-btn px-6 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow font-semibold">
        Dismiss
      </button>
    </div>
  `;
  document.body.appendChild(backdrop);

  // Get toggle elements
  const voiceToggle = backdrop.querySelector("#vb-toggle-voice");
  const soundToggle = backdrop.querySelector("#vb-toggle-sound");
  const musicToggle = backdrop.querySelector("#vb-toggle-music");
  const dismissBtn = backdrop.querySelector("#vb-audio-dismiss");

  // Add event listeners for toggles
  if (voiceToggle) {
    voiceToggle.onchange = () => {
      state.audioSettings.voiceEffects = voiceToggle.checked;
      saveAudioSettings();
    };
  }

  if (soundToggle) {
    soundToggle.onchange = () => {
      state.audioSettings.soundEffects = soundToggle.checked;
      saveAudioSettings();
    };
  }

  if (musicToggle) {
    musicToggle.onchange = () => {
      state.audioSettings.backgroundMusic = musicToggle.checked;
      saveAudioSettings();
      // If music is toggled off, pause it; if on, resume it
      if (!musicToggle.checked && bgMusic) {
        bgMusic.pause();
      } else if (musicToggle.checked) {
        ensureBgMusicPlaying();
      }
    };
  }

  // Dismiss button
  if (dismissBtn) {
    dismissBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      playBackSound();
      backdrop.classList.add("vb-modal-hide");
      setTimeout(() => {
        backdrop.remove();
      }, 180);
    };
  }
}

function saveAudioSettings() {
  try {
    localStorage.setItem("vb_audio_settings", JSON.stringify(state.audioSettings));
  } catch (e) {
    console.warn("Failed to save audio settings", e);
  }
}

function loadAudioSettings() {
  try {
    const saved = localStorage.getItem("vb_audio_settings");
    if (saved) {
      const parsed = JSON.parse(saved);
      state.audioSettings = { ...state.audioSettings, ...parsed };
    }
  } catch (e) {
    console.warn("Failed to load audio settings", e);
  }
}

function showEventPopup(event) {
  const currentScroll = window.scrollY;
  state.currentEvent = event;
  state.showEventPopup = true;
  render();
  // Restore scroll position after render to prevent jumping
  // Use double requestAnimationFrame for more reliable scroll restoration
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, currentScroll);
    });
  });
}

function handleEventResponse(userSaidYes) {
  if (!state.currentEvent) return;

  const event = state.currentEvent;
  const response = userSaidYes ? event.yes : event.no;

  // Get current profile stats
  if (!state.playerProfile || !state.playerProfile.currentRun) return;

  const run = state.playerProfile.currentRun;
  let affection = run.affection !== undefined ? run.affection : 50;
  let trust = run.trust !== undefined ? run.trust : 50;
  let chaos = run.chaos !== undefined ? run.chaos : 0;

  // Apply stat changes
  if (response.affection !== undefined) {
    affection = Math.max(0, Math.min(100, affection + response.affection));
  }
  if (response.trust !== undefined) {
    trust = Math.max(0, Math.min(100, trust + response.trust));
  }
  if (response.chaos !== undefined) {
    chaos = Math.max(0, Math.min(100, chaos + response.chaos));
  }

  // Update both the run and the state
  run.affection = affection;
  run.trust = trust;
  run.chaos = chaos;
  state.affection = affection;
  state.trust = trust;
  state.chaos = chaos;

  // Save the profile
  saveProfile();

  // Build message log
  const playerInitial = state.playerProfile.name ? state.playerProfile.name.charAt(0).toUpperCase() : "Y";
  const boyfriendEmoji = state.boyfriend ? (state.boyfriend.emoji || state.boyfriend.image || "💬") : "💬";

  // Use playerResponse from event data if available, otherwise fall back to helper functions
  const playerResponse = response.playerResponse
    ? response.playerResponse
    : userSaidYes
      ? getDetailedYesResponse(event.prompt)
      : getDetailedNoResponse(event.prompt);

  state.eventMessages = [
    { sender: "boyfriend", emoji: boyfriendEmoji, text: personalize(event.prompt) },
    { sender: "player", initial: playerInitial, text: playerResponse },
    { sender: "boyfriend", emoji: boyfriendEmoji, text: personalize(response.text) }
  ];

  // Reset message display state
  state.eventMessagesVisible = 0;
  state.eventShowingTyping = false;

  // Re-render to show message log with preserved scroll position
  const currentScroll = window.scrollY;
  render();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, currentScroll);
      // Start showing messages sequentially
      showNextEventMessage();
    });
  });
}

function showNextEventMessage() {
  if (state.eventMessagesVisible >= state.eventMessages.length) {
    return; // All messages shown
  }

  const messageLog = document.querySelector(".message-log");
  if (!messageLog) return;

  const nextMessage = state.eventMessages[state.eventMessagesVisible];
  if (!nextMessage) return;

  // Create and show typing indicator
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message-bubble typing';
  typingDiv.style.cssText = `display: flex; align-items: flex-start; margin-bottom: 12px; ${nextMessage.sender === 'player' ? 'justify-content: flex-end;' : ''}`;

  const avatarHTML = nextMessage.sender === 'boyfriend'
    ? `<div class="message-avatar" style="font-size: 24px; margin-right: 10px; width: 40px; height: 40px; background: #f3f4f6; border: 2px solid #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">${nextMessage.emoji}</div>`
    : '';

  const avatarHTMLRight = nextMessage.sender === 'player'
    ? `<div class="message-avatar" style="font-size: 18px; font-weight: bold; margin-left: 10px; width: 40px; height: 40px; background: #8b5cf6; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">${nextMessage.initial}</div>`
    : '';

  typingDiv.innerHTML = `
    ${avatarHTML}
    <div class="message-content" style="background: ${nextMessage.sender === 'boyfriend' ? '#f3f4f6' : '#ddd6fe'}; padding: 12px 16px; border-radius: 16px;">
      <div class="vb-typing-indicator" style="color: #6b7280;">
        <span></span><span></span><span></span>
      </div>
    </div>
    ${avatarHTMLRight}
  `;

  messageLog.appendChild(typingDiv);

  // After a delay, replace typing indicator with actual message
  setTimeout(() => {
    typingDiv.remove();

    // Create actual message
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message-bubble ' + nextMessage.sender + ' vb-message-fade-in';
    messageDiv.style.cssText = `display: flex; align-items: flex-start; margin-bottom: 12px; ${nextMessage.sender === 'player' ? 'justify-content: flex-end;' : ''}`;

    messageDiv.innerHTML = `
      ${avatarHTML}
      <div class="message-content" style="background: ${nextMessage.sender === 'boyfriend' ? '#f3f4f6' : '#ddd6fe'}; padding: 12px 16px; border-radius: 16px; max-width: 70%;">
        <p style="margin: 0; color: #1f2937; font-size: 15px;">${nextMessage.text}</p>
      </div>
      ${avatarHTMLRight}
    `;

    messageLog.appendChild(messageDiv);
    state.eventMessagesVisible++;

    // Show continue button if all messages are shown
    if (state.eventMessagesVisible >= state.eventMessages.length) {
      const continueDiv = document.createElement('div');
      continueDiv.className = 'flex justify-center mt-4';
      continueDiv.innerHTML = '<button id="vb-event-continue" class="vb-hover-pulse px-6 py-2 rounded-full text-white font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105" style="background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);">Continue</button>';
      messageLog.parentElement.appendChild(continueDiv);

      // Add event listener to continue button
      const continueBtn = document.getElementById('vb-event-continue');
      if (continueBtn) {
        continueBtn.addEventListener('click', () => {
          const backdrop = document.getElementById('vb-event-popup');
          const modal = backdrop ? backdrop.querySelector('.vb-modal') : null;

          if (backdrop) backdrop.classList.add('vb-modal-hide');
          if (modal) modal.classList.add('vb-modal-hide');

          setTimeout(() => {
            state.showEventPopup = false;
            state.currentEvent = null;
            state.eventMessages = [];
            state.eventMessagesVisible = 0;
            state.eventShowingTyping = false;
            if (backdrop) backdrop.remove();
            updateGameUI();
            updateLogUI();
          }, 180);
        });
      }
    } else {
      // Show next message after a brief pause
      setTimeout(() => {
        showNextEventMessage();
      }, 600);
    }
  }, 1000);
}

function getDetailedYesResponse(prompt) {
  // Extract the question from the prompt and create a natural "yes" response
  if (prompt.includes("coffee")) return "Yes! I'd love to grab coffee with you.";
  if (prompt.includes("movie")) return "Absolutely, movie night sounds perfect!";
  if (prompt.includes("friends")) return "I'd be happy to meet your friends!";
  if (prompt.includes("restaurant")) return "Sure, let's try it together!";
  if (prompt.includes("road trip")) return "I'm so down for an adventure!";
  if (prompt.includes("shopping") || prompt.includes("outfit")) return "Yes! Let's go pick something out.";
  if (prompt.includes("cook") || prompt.includes("dinner")) return "That sounds wonderful, I'm in!";
  if (prompt.includes("game")) return "Yeah, let's play together!";
  if (prompt.includes("walk") || prompt.includes("park")) return "I'd love to go for a walk.";
  if (prompt.includes("workout") || prompt.includes("exercise")) return "Sure, let's work out together!";
  if (prompt.includes("book") || prompt.includes("read")) return "Yes! I'd like to read it.";
  if (prompt.includes("party") || prompt.includes("event")) return "Of course, let's go!";
  if (prompt.includes("help") || prompt.includes("favor")) return "Absolutely, I'm happy to help!";
  if (prompt.includes("talk") || prompt.includes("listen")) return "Yes, I'm here for you. What's up?";
  return "Yes, I'd like that!";
}

function getDetailedNoResponse(prompt) {
  // Extract the question from the prompt and create a natural "no" response
  if (prompt.includes("coffee")) return "I'm sorry, I can't right now. Maybe another time?";
  if (prompt.includes("movie")) return "I'm not really in the mood tonight, sorry.";
  if (prompt.includes("friends")) return "I'm not quite ready for that yet.";
  if (prompt.includes("restaurant")) return "I'll have to pass this time, but thanks for asking.";
  if (prompt.includes("road trip")) return "I can't make it this weekend, sorry.";
  if (prompt.includes("shopping") || prompt.includes("outfit")) return "I'm not really a shopping person, sorry.";
  if (prompt.includes("cook") || prompt.includes("dinner")) return "I'm not hungry right now, but thank you.";
  if (prompt.includes("game")) return "I'm not really feeling it right now.";
  if (prompt.includes("walk") || prompt.includes("park")) return "I'd rather stay in today.";
  if (prompt.includes("workout") || prompt.includes("exercise")) return "I'm too tired to work out right now.";
  if (prompt.includes("book") || prompt.includes("read")) return "It's not really my type of book.";
  if (prompt.includes("party") || prompt.includes("event")) return "I'm not really in a social mood.";
  if (prompt.includes("help") || prompt.includes("favor")) return "I'm sorry, I'm pretty busy right now.";
  if (prompt.includes("talk") || prompt.includes("listen")) return "I'm not in the right headspace for that right now.";
  return "I don't think I can right now, sorry.";
}

function ensureDisclaimerFooter() {
  const id = 'vb-disclaimer';
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('div');
    el.id = id;
    document.body.appendChild(el);
  }

  const introFooter =
    state.gameState === "quiz" &&
    (!state.quizStarted || state.showPlayerToBoyTransition || state.showSecretForm);
  const footerClasses = [
    introFooter ? "intro-footer" : "default-footer",
    state.showMenu ? "footer-blurred" : ""
  ].filter(Boolean);
  el.className = footerClasses.join(" ");

  el.innerHTML = `
    <div class="vb-disclaimer-inner">
      <div class="vb-disclaimer-text">
        Algorithmically Yours&trade; matches may appear emotionally complex, self-aware, or suspiciously clingy. They are not.<br>
        These characters possess no introspection, consciousness, or actual personhood, regardless of what they tell you.<br>
        For entertainment purposes only.
        <span class="mx-1">|</span>
        <a href="#" id="vb-privacy-link" class="vb-disclaimer-link">Privacy</a>
      </div>
    </div>`;
}

// Single global menu shared across all screens
function ensureGlobalMenu() {
  const id = "vb-global-menu";
  let wrap = document.getElementById(id);
  if (!wrap) {
    wrap = document.createElement("div");
    wrap.id = id;
    document.body.appendChild(wrap);
  }
  wrap.innerHTML = `
    ${state.showMenu ? `<div id="vb-menu-overlay" class="vb-menu-overlay"></div>` : ""}
    <div class="vb-menu-fixed-quiz">
      <button type="button" id="vb-menu-toggle-global" class="vb-menu-trigger text-xs font-semibold text-white bg-white/20 border border-white/50 px-3 py-1 rounded-full shadow hover:bg-white/30 transition">
        Menu
      </button>
      ${state.showMenu
        ? `<div class="vb-menu-pop vb-menu-pop-quiz bg-white/95 border border-purple-100 rounded-xl shadow-lg p-3 text-gray-800 text-sm">
            <button type="button" id="vb-audio-settings-btn" class="w-full text-left px-3 py-2 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold mb-2">Audio Settings</button>
            <button type="button" id="vb-delete-data-global" class="w-full text-left px-3 py-2 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-700 font-semibold">Delete all data</button>
          </div>`
        : ""}
    </div>
  `;

  const toggle = wrap.querySelector("#vb-menu-toggle-global");
  const audioBtn = wrap.querySelector("#vb-audio-settings-btn");
  const deleteBtn = wrap.querySelector("#vb-delete-data-global");
  const overlay = wrap.querySelector("#vb-menu-overlay");
  if (toggle) {
    toggle.onclick = (e) => {
      e.preventDefault();
      playHoverSound(true);
      const y = window.scrollY;
      state.showMenu = !state.showMenu;
      updateMenuBlur();
      ensureGlobalMenu();
      requestAnimationFrame(() => window.scrollTo(0, y));
    };
  }
  if (audioBtn) {
    audioBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      state.showMenu = false;
      updateMenuBlur();
      ensureGlobalMenu();
      showAudioModal();
    };
  }
  if (deleteBtn) {
    deleteBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const y = window.scrollY;
      state.showDeleteConfirm = true;
      state.showMenu = false;

      // Close menu smoothly, then show modal
      updateMenuBlur();
      ensureGlobalMenu();
      showDeleteModal();
      requestAnimationFrame(() => window.scrollTo(0, y));
    };
  }
  if (overlay) {
    overlay.onclick = () => {
      const y = window.scrollY;
      state.showMenu = false;
      updateMenuBlur();
      ensureGlobalMenu();
      requestAnimationFrame(() => window.scrollTo(0, y));
    };
  }

  // Add click-outside-to-close for menu
  if (state.showMenu) {
    const menuPop = wrap.querySelector(".vb-menu-pop");
    const closeHandler = (e) => {
      // Don't close if clicking inside the menu or on the toggle button
      if (menuPop && menuPop.contains(e.target)) return;
      if (toggle && toggle.contains(e.target)) return;
      if (overlay && overlay.contains(e.target)) return;

      // Close the menu
      document.removeEventListener("click", closeHandler, true);
      state.showMenu = false;
      updateMenuBlur();
      ensureGlobalMenu();
    };
    // Delay slightly so this doesn't immediately trigger on the click that opened the menu
    setTimeout(() => document.addEventListener("click", closeHandler, true), 0);
  }

}

function initHoverSound() {
  if (!hoverSound) {
    hoverSound = new Audio("assets/se/click.wav");
    hoverSound.volume = 0.4;
    hoverSound.preload = "auto";
  }
  if (!hoverSound2) {
    hoverSound2 = new Audio("assets/se/click2.wav");
    hoverSound2.volume = 0.4;
    hoverSound2.preload = "auto";
  }
  if (!confirmSound) {
    confirmSound = new Audio("assets/se/confirm.wav");
    confirmSound.volume = 0.5;
    confirmSound.preload = "auto";
  }
  if (!selectSound) {
    selectSound = new Audio("assets/se/Select.wav");
    selectSound.volume = 0.5;
    selectSound.preload = "auto";
  }
  if (!backSound) {
    backSound = new Audio("assets/se/Back.wav");
    backSound.volume = 0.5;
    backSound.preload = "auto";
  }
  if (!interactionSound) {
    interactionSound = new Audio("assets/se/Interaction.wav");
    interactionSound.volume = 0.55;
    interactionSound.preload = "auto";
  }
  if (!traitHoverSound) {
    traitHoverSound = new Audio("assets/se/Hover.wav");
    traitHoverSound.volume = 0.4;
    traitHoverSound.preload = "auto";
  }
  if (!tapSound) {
    tapSound = new Audio("assets/se/Tap.wav");
    tapSound.volume = 0.3;
    tapSound.preload = "auto";
  }
}

function initBgMusic() {
  if (!bgMusic) {
    bgMusic = new Audio("assets/bm/ReflectionOfFamiliarFaces.mp3");
    bgMusic.loop = true;
    bgMusic.volume = 0.35;
    bgMusic.preload = "auto";
  }
}

function fadeInAudio(audio, target = 0.35, duration = 1800) {
  if (!audio) return;
  if (bgMusicFadeTimer) {
    clearInterval(bgMusicFadeTimer);
    bgMusicFadeTimer = null;
  }
  const start = Date.now();
  const startVol = audio.volume;
  const endVol = target;
  bgMusicFadeTimer = setInterval(() => {
    const elapsed = Date.now() - start;
    const t = Math.min(1, elapsed / duration);
    audio.volume = startVol + (endVol - startVol) * t;
    if (t >= 1) {
      clearInterval(bgMusicFadeTimer);
      bgMusicFadeTimer = null;
      bgMusicFaded = true;
    }
  }, 50);
}

function fadeOutAudio(audio, duration = 1200) {
  if (!audio) return Promise.resolve();
  return new Promise((resolve) => {
    if (bgMusicFadeTimer) {
      clearInterval(bgMusicFadeTimer);
      bgMusicFadeTimer = null;
    }
    const start = Date.now();
    const startVol = audio.volume;
    bgMusicFadeTimer = setInterval(() => {
      const elapsed = Date.now() - start;
      const t = Math.min(1, elapsed / duration);
      audio.volume = startVol * (1 - t);
      if (t >= 1) {
        clearInterval(bgMusicFadeTimer);
        bgMusicFadeTimer = null;
        audio.pause();
        audio.currentTime = 0;
        resolve();
      }
    }, 50);
  });
}

function ensureBgMusicPlaying() {
  if (!state.audioSettings.backgroundMusic) return;
  initBgMusic();
  if (!bgMusic) return;
  // Start from silent if we haven't faded yet
  if (!bgMusicFaded) {
    bgMusic.volume = 0;
  }
  bgMusic
    .play()
    .then(() => {
      if (!bgMusicFaded) {
        fadeInAudio(bgMusic, 0.35, 1600);
      }
    })
    .catch(() => {
      /* ignored: browser may need user gesture; next gesture will retry */
    });
}

function primeHoverSounds() {
  if (soundsPrimed) return;
  initHoverSound();
  [hoverSound, hoverSound2, confirmSound, selectSound, backSound, interactionSound].forEach((snd) => {
    if (!snd) return;
    snd.muted = true;
    snd.play().catch(() => {});
    snd.pause();
    snd.currentTime = 0;
    snd.muted = false;
  });
  soundsPrimed = true;
}

function playHoverSound(useAlt) {
  if (!state.audioSettings.soundEffects) return;
  const snd = useAlt ? hoverSound2 : hoverSound;
  if (!snd) return;
  try {
    snd.currentTime = 0;
    snd.play();
  } catch (e) {
    // ignore autoplay restrictions
  }
}

function playConfirmSound() {
  if (!state.audioSettings || !state.audioSettings.soundEffects) return;
  const snd = confirmSound;
  if (!snd) return;
  try {
    snd.currentTime = 0;
    snd.play();
  } catch (e) {
    // ignore autoplay restrictions
  }
}

function playSelectSound() {
  if (!state.audioSettings || !state.audioSettings.soundEffects) return;
  const snd = selectSound;
  if (!snd) return;
  try {
    snd.currentTime = 0;
    snd.play();
  } catch (e) {
    // ignore autoplay restrictions
  }
}

function playBackSound() {
  if (!state.audioSettings || !state.audioSettings.soundEffects) return;
  const snd = backSound;
  if (!snd) return;
  try {
    snd.currentTime = 0;
    snd.play();
  } catch (e) {
    // ignore autoplay restrictions
  }
}

function playInteractionSound() {
  if (!state.audioSettings || !state.audioSettings.soundEffects) return;
  const snd = interactionSound;
  if (!snd) return;
  try {
    snd.currentTime = 0;
    snd.play();
  } catch (e) {
    // ignore autoplay restrictions
  }
}

function playTraitHoverSound() {
  if (!state.audioSettings || !state.audioSettings.soundEffects) return;
  const snd = traitHoverSound;
  if (!snd) return;
  try {
    snd.currentTime = 0;
    snd.play();
  } catch (e) {
    // ignore autoplay restrictions
  }
}

function playTapSound() {
  if (!state.audioSettings || !state.audioSettings.soundEffects) return;
  const snd = tapSound;
  if (!snd) return;
  try {
    snd.currentTime = 0;
    snd.play();
  } catch (e) {
    // ignore autoplay restrictions
  }
}

function fadeOutAudio(audio, duration = 1200) {
  if (!audio) return;
  const start = Date.now();
  const startVol = audio.volume;
  const timer = setInterval(() => {
    const elapsed = Date.now() - start;
    const t = Math.min(1, elapsed / duration);
    audio.volume = startVol * (1 - t);
    if (t >= 1) {
      clearInterval(timer);
      audio.pause();
    }
  }, 50);
}

function whiteTransition(callback, duration = 600) {
  const overlay = document.createElement("div");
  overlay.className = "vb-white-fade";
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: white;
    z-index: 9999;
    opacity: 0;
    pointer-events: none;
    transition: opacity ${duration}ms ease;
  `;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => {
    overlay.style.opacity = "1";
  });
  setTimeout(() => {
    callback();
    requestAnimationFrame(() => {
      overlay.style.opacity = "0";
      setTimeout(() => overlay.remove(), duration + 50);
    });
  }, duration);
}
function playVoiceEffect(action) {
  if (!state.audioSettings.voiceEffects) return;
  const pool = VoiceEffects[action];
  if (!pool || !pool.length) return;
  // 35% chance to play a voice effect
  if (Math.random() > 0.35) return;
  const clip = pool[Math.floor(Math.random() * pool.length)];
  const audio = new Audio(clip);
  audio.volume = 0.6;
  audio.play().catch(() => {});
}

function convertSecret(str) {
  if (!str) return "";
  return str
    // complex/longer phrases first
    .replace(/\bI was\b/gi, "you were")
    .replace(/\bI am\b/gi, "you are")
    .replace(/\bI'm\b/gi, "you're")
    .replace(/\bI've\b/gi, "you've")
    .replace(/\bI'd\b/gi, "you'd")
    .replace(/\bI'll\b/gi, "you'll")
    .replace(/\bI had\b/gi, "you had")
    // simple pronouns
    .replace(/\bmy\b/gi, "your")
    .replace(/\bmine\b/gi, "yours")
    .replace(/\bme\b/gi, "you")
    .replace(/\bI\b/gi, "you");
}

function getInteractionModifier(bfType, playerType) {
  if (!bfType || !playerType) return 1.0;
  const table = {
    // Athletic & Confident
    "athletic:Bubbly": 1.3,
    "athletic:Motherly": 1.3,
    "athletic:Quirky": 1.0,
    "athletic:Icy": 0.7,
    "athletic:Difficult": 0.7,
    // Loyal & Soft
    "loyal:Motherly": 1.3,
    "loyal:Bubbly": 1.3,
    "loyal:Quirky": 1.0,
    "loyal:Icy": 0.7,
    "loyal:Difficult": 0.7,
    // Nerdy & Anxious
    "nerdy:Icy": 1.3,
    "nerdy:Quirky": 1.3,
    "nerdy:Motherly": 1.0,
    "nerdy:Difficult": 0.7,
    "nerdy:Bubbly": 0.7,
    // Mysterious & Sarcastic
    "mysterious:Difficult": 1.3,
    "mysterious:Quirky": 1.3,
    "mysterious:Icy": 1.0,
    "mysterious:Motherly": 0.7,
    "mysterious:Bubbly": 0.7,
    // Chaotic & Unhinged
    "chaotic:Difficult": 1.3,
    "chaotic:Quirky": 1.3,
    "chaotic:Motherly": 1.0,
    "chaotic:Icy": 0.7,
    "chaotic:Bubbly": 0.7
  };
  return table[`${bfType}:${playerType}`] ?? 1.0;
}

function getInitialStats() {
  const modifier = getInteractionModifier(state.boyfriendType, state.playerArchetype);
  const affection = Math.max(0, Math.min(100, Math.round(15 * modifier)));
  const trust = Math.max(0, Math.min(100, Math.round(5 * modifier)));
  return { affection, trust, chaos: 0 };
}

function getPortraitSrc(bfType, bf) {
  // allow explicit override on the data object
  if (bf && bf.photo) {
    return bf.photo.startsWith("http") ? bf.photo : `assets/portraits/${bf.photo}`;
  }
  // default to a type-based file name (e.g., assets/portraits/chaotic.png)
  if (bfType) {
    return `assets/portraits/${bfType}.png`;
  }
  return null;
}

function getQuizFlow() {
  if (state.quizStage === "player" && !state.playerArchetypeDone) {
    const playerSliderPart = PlayerSliderQuestions.map((q) => ({ ...q, target: "player" }));
    const playerPart = PlayerQuestions.map((q) => ({ ...q, target: "player" }));
    return [...playerSliderPart, ...playerPart];
  }
  // boy stage
  const boySlider = BoyfriendSliderQuestions.map((q) => ({ ...q, target: "boy" }));
  const bfPart = QuizQuestions.map((q) => ({ ...q, target: "boy" }));
  return [...boySlider, ...bfPart];
}

// --- QUIZ SCREEN ---

function renderQuiz(root) {
  const flow = getQuizFlow();
  // safety guard to avoid rerunning a finished stage
  if (state.quizStage === "boy" && state.currentQuestion >= QuizQuestions.length) {
    finishMatch();
    return;
  }
  const q = flow[state.currentQuestion];
  if (!q) {
    // safety: if no question found, move to next stage appropriately
    if (state.quizStage === "player") {
      // Preserve player quiz history so Back can traverse if returning from transition
      state.playerQuizHistory = state.quizHistory.slice();
      state.quizStage = "boy";
      state.showPlayerToBoyTransition = true;
      state.currentQuestion = 0;
      state.quizHistory = [];
      render();
      return;
    }
    return;
  }
  const total = flow.length;
  const answered = state.currentQuestion;
  const percent = Math.round((answered / total) * 100);

  const progressDots = flow.map((_, idx) => {
    const filled = idx < answered;
    const fillColor = filled ? "currentColor" : "none";
    return `
      <span class="heart-icon vb-progress-heart ${filled ? "filled" : ""}" aria-hidden="true">
        <svg width="24" height="22" viewBox="0 0 24 22" fill="${fillColor}" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20s-6.5-4.1-9.2-8C0.2 9.1 0.5 4.8 3.7 3 6.8 1.3 9.9 3 12 5.4 14.1 3 17.2 1.3 20.3 3 23.5 4.8 23.8 9.1 21.2 12c-2.7 3.9-9.2 8-9.2 8Z" fill="${fillColor}"/>
        </svg>
      </span>
    `;
  }).join("");

  const isSlider = q && q.kind === "slider";
  const sliderDefault = isSlider
    ? q.defaultValue || Math.round(((q.min || 1) + (q.max || 5)) / 2)
    : 0;
  let heartButtons = "";
  if (isSlider) {
    heartButtons = [1, 2, 3, 4, 5]
      .map((val) => {
        const filled = val <= sliderDefault ? "filled" : "";
        return `
          <button
            type="button"
            data-heart-val="${val}"
            class="heart-scale-btn vb-progress-heart ${filled}"
            aria-label="Select ${val}"
          >
            <svg width="26" height="24" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20s-6.5-4.1-9.2-8C0.2 9.1 0.5 4.8 3.7 3 6.8 1.3 9.9 3 12 5.4 14.1 3 17.2 1.3 20.3 3 23.5 4.8 23.8 9.1 21.2 12c-2.7 3.9-9.2 8-9.2 8Z" fill="currentColor" />
            </svg>
          </button>
        `;
      })
      .join("");
  }

  const optionsArray = !isSlider
    ? (q.options || [])
        .map(
          (opt, idx) => `
    <button
      type="button"
      class="quiz-option vb-hover-pulse relative overflow-hidden w-full md:w-auto max-w-md px-6 py-3 rounded-full bg-gradient-to-b from-white/90 to-white/30 text-gray-800 border-2 border-white/70 shadow-md hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:border-purple-300 transition-all"
      data-option-index="${idx}"
      data-option-type="${opt.type}"
      data-option-target="${q.target}"
    >
      <span class="text-base md:text-lg">${opt.text}</span>
    </button>
  `
        )
    : [];

  root.innerHTML = `
    <div class="relative quiz-vignette">
      <div class="quiz-frame relative">
        <div class="vb-blur-content ${state.showMenu ? "is-blurred" : ""}">
        <div class="flex justify-between items-center mb-3">
          ${
            state.quizStage === "player" && state.currentQuestion === 0
              ? `<button id="vb-player-quiz-back-prefs" class="vb-hover-shrink px-4 py-2 bg-white/70 hover:bg-white text-purple-700 rounded-full border-2 border-white shadow-md font-semibold text-xs md:text-sm">← Back</button>`
              : state.quizStage === "boy" && state.currentQuestion === 0
              ? `<button id="vb-boy-quiz-back-transition" class="vb-hover-shrink px-4 py-2 bg-white/70 hover:bg-white text-purple-700 rounded-full border-2 border-white shadow-md font-semibold text-xs md:text-sm">← Back</button>`
              : `<span></span>`
          }
          <span></span>
        </div>
        <div class="text-center mb-8">
          <div class="vb-banner-wrap px-5 py-3">
            <span class="vb-banner-heart tl">♡</span>
            <span class="vb-banner-heart br">♡</span>
            <span class="vb-banner-heart-small tl">♡</span>
            <span class="vb-banner-heart-small br">♡</span>
            <div class="relative inline-block vb-banner-shell px-5 py-3">
              <div class="absolute inset-0 bg-white/30 blur-sm"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 opacity-60"></div>
              <div class="relative z-10 py-2">
                <h1 class="vb-script vb-banner-text vb-banner-title font-bold text-transparent bg-clip-text drop-shadow-2xl mb-0">
                  Algorithmically Yours
                </h1>
                <div class="flex items-center justify-center gap-1 -mt-1">
                  <div class="vb-sparkle-dot"></div>
                  <div class="vb-sparkle-dot"></div>
                  <p class="vb-subheader-text text-white font-semibold text-base md:text-lg drop-shadow leading-tight">
                    Because real men are... complicated.
                  </p>
                  <div class="vb-sparkle-dot"></div>
                  <div class="vb-sparkle-dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="quiz-step is-entering">
          <div class="flex justify-center">
            <div class="vb-question-pill vb-question-ribbon question-card shadow-xl px-4 md:px-5 py-5 md:py-6 max-w-2xl w-full">
              <span class="quiz-sparkle s1"></span>
              <span class="quiz-sparkle s2"></span>
              <span class="quiz-sparkle s3"></span>
              <span class="quiz-sparkle s4"></span>
              <span class="corner-sparkle tl"></span>
              <span class="corner-sparkle tr"></span>
              <span class="corner-sparkle bl"></span>
              <span class="corner-sparkle br"></span>
              <div class="flex items-center justify-center gap-2">
                <div class="vb-sparkle-dot"></div>
                <div class="vb-sparkle-dot"></div>
                <h2 class="vb-question-text question-title text-xl md:text-2xl text-center leading-snug px-2">
                  ${q.question}
                </h2>
                <div class="vb-sparkle-dot"></div>
                <div class="vb-sparkle-dot"></div>
              </div>
              <div class="flex flex-col items-center mt-3 space-y-1.5">
                <div class="progress-pill">
                  <div class="vb-progress-hearts">
                    ${progressDots}
                  </div>
                </div>
                <span class="progress-pill text-xs md:text-sm font-semibold text-purple-700 border border-white/70 shadow-sm">
                  ${q.target === "player" ? "Assessing vibes..." : "Running compatibility analysis..."} ${percent}%
                </span>
              </div>
            </div>
          </div>

          <div class="w-full flex flex-col items-center mt-4 space-y-4">
            ${
              isSlider
                ? `
              <div class="w-full max-w-2xl flex flex-col items-center gap-4">
                <div class="w-full max-w-xl bg-white/50 rounded-full border border-white/60 px-6 py-4 shadow-lg">
                  <div id="vb-heart-scale" class="flex items-center justify-center gap-3">
                  ${heartButtons}
                  </div>
                </div>
                <div class="text-center text-sm md:text-base font-semibold text-purple-800">
                  Selected: <span id="vb-quiz-slider-val">${sliderDefault}</span> / 5
                </div>
                <div class="text-center text-xs md:text-sm font-semibold text-purple-700" id="vb-quiz-slider-text">
                  1 is least, 5 is most
                </div>
                <button
                  type="button"
                  id="vb-slider-continue"
                  class="quiz-option vb-hover-pulse relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-b from-white/90 to-white/30 text-purple-700 border-2 border-white/70 shadow-md hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:border-purple-300 transition-all"
                >
                  <span class="text-lg font-semibold">Continue</span>
                </button>
              </div>
              `
                : `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-3xl">
                ${optionsArray.slice(0, 4).join("")}
              </div>
              ${optionsArray[4] ? `<div class="flex justify-center w-full max-w-3xl">${optionsArray[4]}</div>` : ""}
              `
            }
          </div>

          <div class="flex justify-center mt-6 min-h-[50px]">
            <button
              type="button"
              id="vb-back-btn"
              class="vb-hover-shrink px-5 py-2 bg-white/70 hover:bg-white text-purple-700 rounded-full border-2 border-white shadow-md font-semibold text-sm md:text-base relative overflow-hidden ${state.currentQuestion > 0 ? "" : "opacity-0 pointer-events-none"}"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
    ${state.showDeleteConfirm
      ? `
    <div class="vb-modal-backdrop">
      <div class="vb-modal text-center">
        <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-2">Delete all data?</h3>
        <p class="text-sm md:text-base text-gray-700 mb-4">Are you sure you want to delete all saved data?</p>
        <div class="flex justify-center gap-3">
          <button type="button" id="vb-delete-yes" class="vb-modal-btn px-4 py-2 rounded-full text-white bg-gradient-to-r from-rose-500 to-rose-600 shadow font-semibold">Yes</button>
          <button type="button" id="vb-delete-no" class="vb-modal-btn px-4 py-2 rounded-full text-gray-700 bg-white shadow border font-semibold">No</button>
        </div>
      </div>
    </div>
      `
      : ""
    }
  `;

  // add listeners
  root.querySelectorAll("[data-option-index]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-option-type");
      const target = btn.getAttribute("data-option-target");
      // small selection flash before advancing
      btn.classList.remove("vb-quiz-press");
      root.querySelectorAll(".vb-quiz-selected").forEach((b) => b.classList.remove("vb-quiz-selected"));
      btn.classList.add("vb-quiz-selected");
      void btn.offsetWidth; // restart animation
      btn.classList.add("vb-quiz-press");
      setTimeout(() => handleAnswer(type, target, btn), 220);
    });
  });

  // Back button from first player quiz question to preferences
  const backPrefsBtn = root.querySelector("#vb-player-quiz-back-prefs");
  if (backPrefsBtn) {
    backPrefsBtn.addEventListener("click", () => {
      const y = window.scrollY;
      // Go back to preferences screen
      state.prefCollected = false;
      state.currentQuestion = 0;
      render();
      requestAnimationFrame(() => window.scrollTo(0, y));
    });
  }

  // Back button from first boyfriend quiz question to transition screen
  const backTransitionBtn = root.querySelector("#vb-boy-quiz-back-transition");
  if (backTransitionBtn) {
    backTransitionBtn.addEventListener("click", () => {
      const y = window.scrollY;
      // Go back to the transition screen
      state.showPlayerToBoyTransition = true;
      state.currentQuestion = 0;
      render();
      requestAnimationFrame(() => window.scrollTo(0, y));
    });
  }

  const backBtn = root.querySelector("#vb-back-btn");
  if (backBtn) {
    backBtn.classList.add("vb-back-btn-base", "vb-hover-shrink");
    backBtn.addEventListener("click", () => {
      backBtn.classList.remove("vb-back-press");
      void backBtn.offsetWidth;
      backBtn.classList.add("vb-back-press");
      setTimeout(handleBack, 160);
    });
  }

  if (isSlider) {
    const heartEls = Array.from(root.querySelectorAll("[data-heart-val]"));
    const valEl = root.querySelector("#vb-quiz-slider-val");
    const hoverTextEl = root.querySelector("#vb-quiz-slider-text");
    const contBtn = root.querySelector("#vb-slider-continue");
    const flow = getQuizFlow();
    let currentVal = sliderDefault;
    const updateHearts = (val, pulse) => {
      heartEls.forEach((h) => {
        const hv = Number(h.getAttribute("data-heart-val"));
        if (hv <= val) {
          h.classList.add("filled");
          if (pulse) {
            h.classList.remove("pulse-once");
            void h.offsetWidth;
            h.classList.add("pulse-once");
          }
        } else {
          h.classList.remove("filled", "pulse-once");
        }
      });
      if (valEl) valEl.textContent = val;
      if (hoverTextEl) {
    const hoverMap = q.hoverText || {
      1: "Completely predictable. Who likes surprises?",
      2: "Stable. But I adapt when necessary.",
      3: "A healthy mix of spontaneity.",
      4: "Walking plot twist.",
      5: "Certifiably unhinged."
    };
        hoverTextEl.textContent = hoverMap[val] || "1 is least, 5 is most";
      }
    };
    updateHearts(currentVal, false);
    heartEls.forEach((h) => {
      h.addEventListener("mouseenter", () => {
        const hv = Number(h.getAttribute("data-heart-val"));
        updateHearts(hv, false);
      });
      h.addEventListener("mouseleave", () => {
        updateHearts(currentVal, false);
      });
      h.addEventListener("click", () => {
        const hv = Number(h.getAttribute("data-heart-val"));
        currentVal = hv;
        updateHearts(currentVal, true);
      });
    });

  if (contBtn) {
    contBtn.addEventListener("click", () => {
      ensureBgMusicPlaying();
      contBtn.classList.remove("vb-quiz-press");
      void contBtn.offsetWidth;
      contBtn.classList.add("vb-quiz-press");
        const val = String(currentVal);
        const pts = (q.points && q.points[val]) || {};

        if (q.target === "player") {
          const newPlayerScores = { ...state.playerArchetypeScores };
          Object.entries(pts).forEach(([k, v]) => {
            newPlayerScores[k] = (newPlayerScores[k] || 0) + v;
          });
          state.playerArchetypeScores = newPlayerScores;
          state.quizHistory.push({
            question: state.currentQuestion,
            scores: { ...state.scores },
            playerScores: { ...newPlayerScores }
          });
          if (state.currentQuestion < flow.length - 1) {
            state.currentQuestion += 1;
            render();
          } else {
            // end of player stage
            const winner = Object.keys(state.playerArchetypeScores).reduce(
              (best, key) =>
                state.playerArchetypeScores[key] > state.playerArchetypeScores[best] ? key : best
            );
            const playerFlowLength = PlayerSliderQuestions.length + PlayerQuestions.length;
            state.playerArchetype = winner;
            state.playerArchetypeDone = true;
            if (state.playerProfile) {
              state.playerProfile.playerArchetype = winner;
              saveProfile();
            }
            // Preserve player quiz history so Back can traverse if returning from transition
            state.playerQuizHistory = state.quizHistory.slice();
            // Hold on transition screen with player stage active so Back can revisit player questions
            state.showPlayerToBoyTransition = true;
            // Keep position at the last player question for proper back navigation
            state.currentQuestion = Math.max(0, playerFlowLength - 1);
            render();
          }
        } else {
          const newScores = { ...state.scores };
          Object.entries(pts).forEach(([k, v]) => {
            newScores[k] = (newScores[k] || 0) + v;
          });
          state.scores = newScores;
          state.quizHistory.push({
            question: state.currentQuestion,
            scores: { ...newScores },
            playerScores: { ...state.playerArchetypeScores }
          });
          if (state.currentQuestion < flow.length - 1) {
            state.currentQuestion += 1;
            render();
          } else {
            if (!state.playersecret || !state.playersecret.trim()) {
              state.showSecretForm = true;
              render();
              return;
            }
            finishMatch();
          }
        }
      });
    }
  }
}

function handleAnswer(type, target, btnEl) {
  const step = document.querySelector(".quiz-step");
  const flow = getQuizFlow();
  const isPlayerQuestion = flow[state.currentQuestion]?.target === "player";

  const advance = () => {
    if (isPlayerQuestion) {
      const newPlayerScores = {
        ...state.playerArchetypeScores,
        [type]: (state.playerArchetypeScores[type] || 0) + 1
      };
      state.playerArchetypeScores = newPlayerScores;
      state.quizHistory.push({
        question: state.currentQuestion,
        scores: { ...state.scores },
        playerScores: { ...newPlayerScores }
      });
    } else {
      const newScores = { ...state.scores, [type]: state.scores[type] + 1 };
      state.scores = newScores;
      state.quizHistory.push({
        question: state.currentQuestion,
        scores: { ...newScores },
        playerScores: { ...state.playerArchetypeScores }
      });
    }

    if (state.currentQuestion < flow.length - 1) {
      state.currentQuestion += 1;
      render();
    } else {
      if (isPlayerQuestion && state.quizStage === "player") {
        const winner = Object.keys(state.playerArchetypeScores).reduce(
          (best, key) =>
            state.playerArchetypeScores[key] > state.playerArchetypeScores[best] ? key : best
        );
        state.playerArchetype = winner;
        state.playerArchetypeDone = true;
        if (state.playerProfile) {
          state.playerProfile.playerArchetype = winner;
          saveProfile();
        }
        // Preserve player quiz history so Back can traverse if returning from transition
        state.playerQuizHistory = state.quizHistory.slice();
        state.quizStage = "boy";
        state.showPlayerToBoyTransition = true;
        state.currentQuestion = 0;
        state.quizHistory = [];
        render();
      } else {
        if (!state.playersecret || !state.playersecret.trim()) {
          state.showSecretForm = true;
          render();
          return;
        }
        finishMatch();
      }
    }
  };

  if (btnEl) {
    btnEl.classList.remove("vb-press");
    void btnEl.offsetWidth;
    btnEl.classList.add("vb-press");
  }

  if (step) {
    step.classList.remove("is-entering");
    step.classList.add("is-leaving");
    step.addEventListener("animationend", () => advance(), { once: true });
  } else {
    advance();
  }
}

function handleBack() {
  // If we're in player stage and lost history (e.g., after transition), restore it
  if (
    state.quizStage === "player" &&
    (!state.quizHistory || state.quizHistory.length === 0) &&
    state.playerQuizHistory &&
    state.playerQuizHistory.length
  ) {
    state.quizHistory = state.playerQuizHistory.slice();
    const restore = state.quizHistory[state.quizHistory.length - 1];
    if (restore && typeof restore.question === "number") {
      state.currentQuestion = restore.question;
    }
  }

  if (state.quizHistory && state.quizHistory.length > 0) {
    const last = state.quizHistory[state.quizHistory.length - 1];
    // If history already represents the current question, drop it first
    if (last && last.question === state.currentQuestion) {
      state.quizHistory.pop();
    }
    const prev = state.quizHistory[state.quizHistory.length - 1];
    if (prev) {
      state.currentQuestion = prev.question;
      state.scores = prev.scores;
      if (prev.playerScores) {
        state.playerArchetypeScores = prev.playerScores;
      }
    } else {
      state.currentQuestion = 0;
      state.scores = { ...state.scores };
      state.playerArchetypeScores = {
        Quirky: 0,
        Motherly: 0,
        Icy: 0,
        Difficult: 0,
        Bubbly: 0
      };
    }
    render();
  }
}

function finishMatch() {
  // If secret not provided, force the secret form before matching
  if (!state.playersecret || !state.playersecret.trim()) {
    state.showSecretForm = true;
    state.gameState = "quiz";
    render();
    return;
  }

  let winningType = Object.keys(state.scores).reduce(
    (best, key) => (state.scores[key] > state.scores[best] ? key : best)
  );
  state.boyfriend = BoyfriendsData[winningType];
  state.boyfriendType = winningType;
  state.gameState = "game";
  state.message = "";
  const init = getInitialStats();
  state.affection = init.affection;
  state.trust = init.trust;
  state.chaos = init.chaos;
  state.interactionLog = [];
  state.showPlayerToBoyTransition = false;
  state.quizStage = "boy";
  resetAllCooldowns();
  persistCurrentRun();
  render();
}

// --- GAME LOGIC & RENDER ---

function checkEndings() {
  const { affection, trust, chaos, boyfriend } = state;

  if (affection >= 100) {
    triggerEnding("perfect");
    return true;
  }
  if (chaos >= 100) {
    triggerEnding("chaotic");
    return true;
  }
  if (affection <= 0) {
    triggerEnding("affection0");
    return true;
  }
  if (trust <= 0) {
    triggerEnding("trust0");
    return true;
  }

  return false;
}

  function triggerEnding(type) {
    const bf = state.boyfriend || BoyfriendsData[state.boyfriendType];
    if (!bf) return false;
    const endings = bf.endings || {};
    const map = EndingsByType[state.boyfriendType] || EndingsByType.default;
    const keyMap = {
      affection0: "noAffection",
      trust0: "noTrust",
      breakup: "breakup"
    };
    const mappedKey = keyMap[type] || type;

    const message =
      personalize(endings[type]) ||
      personalize(map[mappedKey]) ||
      map[mappedKey] ||
      EndingsByType.default[mappedKey] ||
      "The story ends.";

  const doTransition = () => {
    state.gameState = "ending";
    state.ending = {
      type,
      message,
      boyfriend: bf,
      portrait: getPortraitSrc(state.boyfriendType, bf)
    };
    state.showMenu = false;
    state.showDeleteConfirm = false;
    clearSavedRun();
    render();
  };

  fadeOutAudio(bgMusic, 1000);
  whiteTransition(doTransition);
  return true;
}

function updateGameUI() {
  const bars = ["affection", "trust", "chaos"];
  bars.forEach((key) => {
    const bar = document.querySelector(`[data-bar="${key}"]`);
    const val = document.querySelector(`[data-bar-value="${key}"]`);
    const pct = state[key] ?? 0;
    if (bar) bar.style.width = pct + "%";
    if (val) val.textContent = pct + "%";
  });

  const msgBox = document.querySelector("#vb-message-box");
  if (msgBox) {
    if (state.message) {
      msgBox.innerHTML = `
        <div class="vb-message mb-5 p-4 rounded-2xl bg-gradient-to-r from-pink-100 to-purple-100 border border-purple-200 shadow">
          <p class="font-bold text-gray-800 mb-1 text-sm md:text-base">${state.boyfriend.name}:</p>
          <p class="text-gray-700 text-sm md:text-base leading-relaxed">${state.message}</p>
        </div>
      `;
    } else {
      msgBox.innerHTML = `
        <div class="mb-5 text-center text-gray-500 text-sm italic">
          Choose an action to see how he reacts...
        </div>
      `;
    }
  }
}

function updateLogUI() {
  const logBox = document.querySelector("#vb-log-box");
  if (!logBox) return;

  const actionLabels = {
    kiss: "Kiss",
    argue: "Argue",
    flirt: "Flirt",
    tease: "Tease",
    talk: "Talk"
  };

  const logItems = state.interactionLog
    .slice(-3)
    .reverse()
    .map(
      (item) => `
        <div class="px-3 py-2 rounded-xl bg-white/70 border border-white/80 shadow mb-2 last:mb-0">
          <div class="text-xs font-semibold text-gray-700 flex justify-between">
            <span>${item.action || actionLabels[item.action] || ""}</span>
          </div>
          <div class="text-sm text-gray-800 mt-1 leading-snug">
            ${item.response || "<em>No response logged</em>"}
          </div>
        </div>
      `
    )
    .join("");

  logBox.innerHTML =
    logItems || `<div class="text-xs text-gray-500 italic">No messages yet.</div>`;
}

function pickRandomEvent() {
  if (!state.boyfriend) return null;

  // Combine universal events and boyfriend-specific events
  const universalEvents = UniversalEvents || [];
  const boyfriendEvents = state.boyfriend.events || [];
  const allEvents = [...universalEvents, ...boyfriendEvents];

  if (allEvents.length === 0) return null;

  // Pick a random event
  return randomFrom(allEvents);
}

function checkThresholdEvents() {
  if (!state.boyfriend || !state.boyfriend.thresholdEvents) return null;

  const { affection, trust, chaos } = state;
  const thresholdEvents = state.boyfriend.thresholdEvents;

  // Check each threshold event
  for (const event of thresholdEvents) {
    // Skip if already triggered
    if (state.triggeredThresholdEvents.includes(event.id)) continue;

    // Check if threshold conditions are met
    let conditionMet = true;
    const threshold = event.threshold;

    if (threshold.affection) {
      if (threshold.affection.min !== undefined && affection < threshold.affection.min) {
        conditionMet = false;
      }
      if (threshold.affection.max !== undefined && affection > threshold.affection.max) {
        conditionMet = false;
      }
    }

    if (threshold.trust) {
      if (threshold.trust.min !== undefined && trust < threshold.trust.min) {
        conditionMet = false;
      }
      if (threshold.trust.max !== undefined && trust > threshold.trust.max) {
        conditionMet = false;
      }
    }

    if (threshold.chaos) {
      if (threshold.chaos.min !== undefined && chaos < threshold.chaos.min) {
        conditionMet = false;
      }
      if (threshold.chaos.max !== undefined && chaos > threshold.chaos.max) {
        conditionMet = false;
      }
    }

    // If conditions are met, mark as triggered and return the event
    if (conditionMet) {
      state.triggeredThresholdEvents.push(event.id);
      return event;
    }
  }

  return null;
}

const cooldownTimers = {};
const requestFrame =
  typeof window !== "undefined" && window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : (fn) => setTimeout(fn, 16);
const cancelFrame =
  typeof window !== "undefined" && window.cancelAnimationFrame
    ? window.cancelAnimationFrame.bind(window)
    : (handle) => clearTimeout(handle);

function ensureCooldownState() {
  if (!state.cooldowns) {
    state.cooldowns = createCooldownState();
  }
}

function normalizeCooldowns(savedCooldowns) {
  const base = createCooldownState();
  if (!savedCooldowns || typeof savedCooldowns !== "object") return base;

  Object.keys(base).forEach((action) => {
    const val = savedCooldowns[action];
    const numericVal = typeof val === "number" ? val : 0;
    base[action] = numericVal > Date.now() ? numericVal : 0;
  });
  return base;
}

function ensureCooldownOverlay(btn) {
  if (!btn) return null;
  let overlay = btn.querySelector(".vb-cooldown-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "vb-cooldown-overlay";
    overlay.style.setProperty("--vb-cooldown-progress", "0");
    btn.appendChild(overlay);
  }
  return overlay;
}

function updateCooldownVisual(action) {
  const btn = document.querySelector(`[data-action="${action}"]`);
  const overlay = ensureCooldownOverlay(btn);
  if (!btn || !overlay) return;

  ensureCooldownState();

  const duration = InteractionCooldowns[action] || 0;
  if (!duration) {
    overlay.style.setProperty("--vb-cooldown-progress", "0");
    overlay.classList.remove("is-active");
    btn.classList.remove("is-cooldown");
    btn.removeAttribute("disabled");
    btn.removeAttribute("aria-disabled");
    return;
  }

  const endsAt = state.cooldowns[action] || 0;
  const remaining = Math.max(0, endsAt - Date.now());
  const progress = Math.min(1, remaining / duration);

  overlay.style.setProperty("--vb-cooldown-progress", progress.toString());
  overlay.classList.toggle("is-active", progress > 0);

  if (progress > 0) {
    btn.classList.add("is-cooldown");
    btn.setAttribute("disabled", "disabled");
    btn.setAttribute("aria-disabled", "true");
  } else {
    btn.classList.remove("is-cooldown");
    btn.removeAttribute("disabled");
    btn.removeAttribute("aria-disabled");
  }
}

function clearCooldownTimer(action) {
  if (cooldownTimers[action]) {
    cancelFrame(cooldownTimers[action]);
    cooldownTimers[action] = null;
  }
}

function runCooldownLoop(action) {
  clearCooldownTimer(action);
  const tick = () => {
    updateCooldownVisual(action);
    const endsAt = state.cooldowns?.[action] || 0;
    if (endsAt > Date.now()) {
      cooldownTimers[action] = requestFrame(tick);
    } else {
      state.cooldowns[action] = 0;
      updateCooldownVisual(action);
      cooldownTimers[action] = null;
    }
  };
  cooldownTimers[action] = requestFrame(tick);
}

function startActionCooldown(action) {
  ensureCooldownState();
  const duration = InteractionCooldowns[action];
  if (!duration) return;

  state.cooldowns[action] = Date.now() + duration;
  runCooldownLoop(action);
}

function isActionOnCooldown(action) {
  ensureCooldownState();
  return (state.cooldowns[action] || 0) > Date.now();
}

function pingCooldown(action, btnEl) {
  const btn = btnEl || document.querySelector(`[data-action="${action}"]`);
  if (!btn) return;
  btn.classList.remove("vb-cooldown-ping");
  // force reflow to restart animation
  void btn.offsetWidth;
  btn.classList.add("vb-cooldown-ping");
}

function setupCooldownOverlays(root) {
  if (!root) return;
  root.querySelectorAll("[data-action]").forEach((btn) => {
    const action = btn.getAttribute("data-action");
    ensureCooldownOverlay(btn);
    if (!action) return;
    if (isActionOnCooldown(action)) {
      runCooldownLoop(action);
    } else {
      updateCooldownVisual(action);
    }
  });
}

function resetAllCooldowns() {
  Object.keys(cooldownTimers).forEach((action) => clearCooldownTimer(action));
  ensureCooldownState();
  state.cooldowns = createCooldownState();
}

function handleAction(action, btnEl) {
  if (!state.boyfriend) return;

  if (isActionOnCooldown(action)) {
    pingCooldown(action, btnEl);
    return;
  }

  if (btnEl) {
    btnEl.classList.remove("vb-press");
    // force reflow so animation restarts
    void btnEl.offsetWidth;
    btnEl.classList.add("vb-press");
  }

  startActionCooldown(action);

  // Increment interaction count
  state.interactionCount++;

  // Set random event trigger on first interaction
  if (state.nextEventAt === null) {
    state.nextEventAt = Math.floor(Math.random() * 7) + 9; // Random 9-15
  }

  // Check for random event trigger FIRST, before processing interaction
  if (state.interactionCount >= state.nextEventAt) {
    const eventToTrigger = pickRandomEvent();
    if (eventToTrigger) {
      state.interactionCount = 0;
      state.nextEventAt = Math.floor(Math.random() * 7) + 9; // Next event in 9-15 interactions

      // Set message and log to "Event Unlocked" instead of processing interaction
      state.message = "Event Unlocked";
      const actionLabels = {
        kiss: "Kiss",
        argue: "Argue",
        flirt: "Flirt",
        tease: "Tease",
        talk: "Talk"
      };
      state.interactionLog = [
        ...state.interactionLog.slice(-9),
        { action: actionLabels[action] || action, response: "Event Unlocked" }
      ];

      updateGameUI(); // Update UI to show "Event Unlocked"
      updateLogUI();  // Update log with "Event Unlocked"

      showEventPopup(eventToTrigger);
      return; // Don't process normal interaction stats
    }
  }

  // Check for threshold events
  const thresholdEvent = checkThresholdEvents();
  if (thresholdEvent) {
    // Set message and log to "Event Unlocked"
    state.message = "Event Unlocked";
    const actionLabels = {
      kiss: "Kiss",
      argue: "Argue",
      flirt: "Flirt",
      tease: "Tease",
      talk: "Talk"
    };
    state.interactionLog = [
      ...state.interactionLog.slice(-9),
      { action: actionLabels[action] || action, response: "Event Unlocked" }
    ];

    updateGameUI(); // Update UI to show "Event Unlocked"
    updateLogUI();  // Update log with "Event Unlocked"

    showEventPopup(thresholdEvent);
    return; // Don't process normal interaction stats
  }

  // Normal interaction processing (only if no event triggered)
  const modifier = getInteractionModifier(state.boyfriendType, state.playerArchetype);

  let { affection, trust, chaos } = state;

  // 30% chance to use universal responses, 70% chance to use boyfriend-specific
  const useUniversal = Math.random() < 0.30;
  let responses;

  if (useUniversal && UniversalResponses[action]) {
    responses = UniversalResponses[action];
  } else {
    responses = state.boyfriend.responses[action] || [];
  }

  const responseData = randomFrom(responses);

  // Handle both old string format and new object format
  let response, statChanges;
  if (typeof responseData === 'string') {
    response = personalize(responseData);
    statChanges = null;
  } else if (responseData && typeof responseData === 'object') {
    response = personalize(responseData.text || "");
    statChanges = responseData;
  } else {
    response = "";
    statChanges = null;
  }

  switch (action) {
    case "kiss":
      affection = Math.min(100, affection + Math.round(5 * modifier));
      trust = Math.min(100, trust + Math.round(3 * modifier));
      triggerHearts();
      break;
    case "argue":
      affection = Math.max(0, affection - Math.round(5 * modifier));
      trust = Math.max(0, trust - Math.round(10 * modifier));
      chaos = Math.min(100, chaos + Math.round(15 * modifier));
      break;
    case "flirt":
      affection = Math.min(100, affection + Math.round(5 * modifier));
      chaos = Math.min(100, chaos + Math.round(5 * modifier));
      break;
    case "tease":
      affection = Math.min(100, affection + Math.round(3 * modifier));
      chaos = Math.min(100, chaos + Math.round(10 * modifier));
      break;
    case "talk":
      // Use stat changes from the response object if available
      if (statChanges && (statChanges.affection !== undefined || statChanges.trust !== undefined || statChanges.chaos !== undefined)) {
        if (statChanges.affection !== undefined) {
          const affectionChange = Math.round(statChanges.affection * modifier);
          affection = affectionChange > 0
            ? Math.min(100, affection + affectionChange)
            : Math.max(0, affection + affectionChange);
        }
        if (statChanges.trust !== undefined) {
          const trustChange = Math.round(statChanges.trust * modifier);
          trust = trustChange > 0
            ? Math.min(100, trust + trustChange)
            : Math.max(0, trust + trustChange);
        }
        if (statChanges.chaos !== undefined) {
          const chaosChange = Math.round(statChanges.chaos * modifier);
          chaos = chaosChange > 0
            ? Math.min(100, chaos + chaosChange)
            : Math.max(0, chaos + chaosChange);
        }
      }
      break;
  }

  state.affection = affection;
  state.trust = trust;
  state.chaos = chaos;
  state.message = response;
  playVoiceEffect(action);

  const actionLabels = {
    kiss: "Kiss",
    argue: "Argue",
    flirt: "Flirt",
    tease: "Tease",
    talk: "Talk"
  };
  state.interactionLog = [
    ...state.interactionLog.slice(-9),
    { action: actionLabels[action] || action, response: state.message || "" }
  ];

  persistCurrentRun();

  if (checkEndings()) {
    render(); // go to ending screen
  } else {
    updateGameUI(); // update stats/message
    updateLogUI();  // refresh conversation log
  }
}


function triggerHearts() {
  // will be created in renderGame
  const overlay = document.querySelector(".vb-hearts-overlay");
  if (!overlay) return;

  overlay.innerHTML = "";
  for (let i = 0; i < 12; i++) {
    const span = document.createElement("span");
    span.className = "vb-heart";
    span.textContent = "♡";
    const left = Math.random() * 100;
    const top = 30 + Math.random() * 40;
    span.style.left = left + "%";
    span.style.top = top + "%";
    span.style.animationDelay = (i * 0.05) + "s";
    overlay.appendChild(span);
  }

setTimeout(() => {
  overlay.innerHTML = "";
}, 1500);
}

// Enhanced heart burst on kiss
function triggerHearts() {
  const overlay = document.querySelector(".vb-hearts-overlay");
  if (!overlay) return;

  overlay.innerHTML = "";
  const colors = ["#fb7185", "#f472b6", "#f9a8d4", "#fecdd3", "#ffffff"];
  for (let i = 0; i < 20; i++) {
    const span = document.createElement("span");
    span.className = "vb-heart";
    span.textContent = "♡";
    const color = colors[Math.floor(Math.random() * colors.length)];
    span.style.color = color;
    span.style.fontSize = 18 + Math.random() * 12 + "px";
    span.style.animationDuration = (1.1 + Math.random() * 0.7) + "s";
    span.style.setProperty("--vb-heart-rot", `${Math.random() * 60 - 30}deg`);
    const left = -5 + Math.random() * 110; // allow spill outside card
    const top = 20 + Math.random() * 60;
    span.style.left = left + "%";
    span.style.top = top + "%";
    span.style.animationDelay = (i * 0.04) + "s";
    overlay.appendChild(span);
  }

  setTimeout(() => {
    overlay.innerHTML = "";
  }, 1800);
}

function handleBreakup() {
  state.showBreakupConfirm = true;
  render();
}

function restartGame() {
  clearSavedRun();
  state.gameState = "quiz";
  state.quizStage = "player";
  state.showPlayerToBoyTransition = false;
  state.currentQuestion = 0;
  state.scores = {
    chaotic: 0,
    loyal: 0,
    nerdy: 0,
    athletic: 0,
    mysterious: 0
  };
  state.boyfriend = null;
  state.boyfriendType = null;
  state.affection = 15;
  state.trust = 5;
  state.chaos = 0;
  state.message = "";
  state.quizHistory = [];
  state.quizStarted = false;
  state.showNameErrorModal = false;
  state.nameError = "";
  state.interactionLog = [];
  state.showMenu = false;
  state.prefCollected = false;
  state.prefAnswers = {
    color: "",
    happy: "",
    treat: "",
    safe: "",
    likedName: ""
  };
  state.playersecret = "";
  state.showSecretForm = false;
  state.playerArchetype = null;
  state.playerArchetypeDone = false;
  state.playerArchetypeScores = {
    Quirky: 0,
    Motherly: 0,
    Icy: 0,
    Difficult: 0,
    Bubbly: 0
  };
  state.playerArchetypeQuestion = 0;
  state.quizHistory = [];
  resetAllCooldowns();
  render();
}

// --- GAME SCREEN ---

function renderGame(root) {
  const bf = state.boyfriend;
  if (!bf) {
    // recover gracefully if a saved run is missing boyfriend data
    restartGame();
    return;
  }

  const photoSrc = getPortraitSrc(state.boyfriendType, bf);
  const shadowColor =
    bf.colorShadow ||
    (state.boyfriendType ? BoyfriendShadowColors[state.boyfriendType] : null) ||
    "rgba(255,255,255,0.6)";

  // Ensure the current run is persisted even if no interactions yet
  persistCurrentRun();

  const statsHTML = `
    ${createStatBar("♡️ Affection", state.affection, "from-pink-400 to-red-500", "affection")}
    ${createStatBar("💙 Trust", state.trust, "from-blue-400 to-indigo-500", "trust")}
    ${createStatBar("🔥 Chaos", state.chaos, "from-orange-400 to-red-600", "chaos")}

  `;

  const logItems = state.interactionLog
    .slice(-3)
    .reverse()
    .map(item => `
    <div class="px-3 py-2 rounded-xl bg-white/70 border border-white/80 shadow mb-2 last:mb-0">
      <div class="text-xs font-semibold text-gray-700">${item.action}</div>
      <div class="text-sm text-gray-800 mt-1 leading-snug">${item.response || "<em>No response logged</em>"}</div>
    </div>
  `)
  .join("");


  const gameWrapperClass = state.showBreakupConfirm || state.showDeleteConfirm || state.showMenu
    ? "relative vb-game-card"
    : "relative vb-game-card is-entering";

  setBodyBackground(state.boyfriendType);

  root.innerHTML = `
      <div class="${gameWrapperClass} relative">
        <div class="vb-blur-content ${state.showMenu ? "is-blurred" : ""}">
      <div class="absolute inset-0 vb-hearts-overlay"></div>

      <div class="text-center mb-6">
        <div class="vb-banner-wrap px-6 py-3">
          <span class="vb-banner-heart tl">♡</span>
          <span class="vb-banner-heart br">♡</span>
          <span class="vb-banner-heart-small tl">♡</span>
          <span class="vb-banner-heart-small br">♡</span>
          <div class="relative inline-block vb-banner-shell px-6 py-3">
            <div class="absolute inset-0 bg-white/30 blur-sm"></div>
            <div class="absolute inset-0 bg-gradient-to-r ${bf.color} opacity-60"></div>
            <div class="relative z-10 flex flex-col items-center gap-1 py-2">
              <h1 class="vb-script vb-banner-text vb-banner-title font-bold text-transparent bg-clip-text drop-shadow-2xl mb-0">
                Your Perfect Match
              </h1>
              <div class="flex items-center gap-1 -mt-1">
                <div class="vb-sparkle-dot"></div>
                <div class="vb-sparkle-dot"></div>
                <p class="text-white font-semibold text-base md:text-lg drop-shadow leading-tight">
                  Because real men are... complicated.
                </p>
                <div class="vb-sparkle-dot"></div>
                <div class="vb-sparkle-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-5">
        <!-- Profile -->
        <div class="bg-white/55 backdrop-blur-lg rounded-3xl shadow-2xl p-5 md:p-7">
          <div class="mb-4">
            <div class="flex items-center justify-center gap-6 md:gap-8">
              <div class="w-30 h-30 md:w-36 md:h-36 rounded-full bg-white/80 border-2 border-white/80 shadow-inner overflow-hidden flex items-center justify-center text-xs text-purple-600 font-semibold relative">
                <span class="absolute inset-0 rounded-full blur-2xl opacity-80 pointer-events-none" style="background: radial-gradient(circle at 50% 50%, ${shadowColor}, transparent 65%);"></span>
                <span class="relative z-10">
                ${photoSrc
                  ? `<img src="${photoSrc}" alt="${bf.name} photo" class="w-full h-full object-cover">`
                  : `Add Photo`}
                </span>
              </div>
              <div class="flex flex-col items-center gap-2">
                <div class="text-6xl md:text-7xl">${bf.image}</div>
                <h2 class="vb-script vb-boy-name font-bold bg-gradient-to-r ${bf.color} bg-clip-text text-transparent drop-shadow">
                  ${bf.name}
                </h2>
              </div>
            </div>
            <p class="mt-3 text-sm md:text-base font-semibold text-white drop-shadow text-center">
              ${bf.archetype}
            </p>
          </div>

          <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-4 border border-purple-200 shadow">
            <p class="text-gray-800 italic text-sm md:text-base leading-relaxed">"${bf.bio}"</p>
          </div>

          <div class="mt-5" style="position: relative; z-index: 100;">
            <h3 class="text-sm md:text-base font-bold text-white drop-shadow mb-2">Personality Traits</h3>
            <div class="flex flex-wrap gap-2" style="overflow: visible;">
              ${bf.traits
                .map((t, idx) =>
                    `<span class="vb-trait-badge relative px-3 py-1 rounded-full bg-gradient-to-r ${bf.color} text-white text-xs md:text-sm font-semibold shadow cursor-help transition-all hover:scale-105 hover:shadow-lg" data-trait="${t}" data-trait-index="${idx}">
                      ${t}
                      <span class="vb-trait-tooltip absolute bottom-full ${idx === 0 ? 'left-0' : 'left-1/2 transform -translate-x-1/2'} mb-3 px-4 py-2 bg-white text-gray-900 text-xs rounded-lg shadow-xl opacity-0 pointer-events-none transition-opacity duration-200 border-2 border-gray-200" style="width: 280px; z-index: 9999;">
                        ${bf.traitDescriptions && bf.traitDescriptions[t] ? bf.traitDescriptions[t] : t}
                        <span class="absolute top-full ${idx === 0 ? 'left-4' : 'left-1/2 transform -translate-x-1/2'} -mt-1 border-4 border-transparent border-t-white"></span>
                      </span>
                    </span>`
                )
                .join("")}
            </div>
          </div>

          <div class="mt-5 bg-gradient-to-br ${bf.color} rounded-2xl p-4 shadow-lg">
            <h3 class="text-white font-bold text-sm md:text-base mb-3 drop-shadow">
              Relationship Status
            </h3>
            ${statsHTML}
          </div>
        </div>

        <!-- Interaction -->
        <div class="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-5 md:p-7">
          <div class="text-center mb-4">
            <p class="font-bold text-base md:text-lg bg-gradient-to-r ${bf.color} bg-clip-text text-transparent">
              Interact with ${bf.name}
            </p>
          </div>

         <div id="vb-message-box">
  ${
    state.message
      ? `
        <div class="vb-message mb-5 p-4 rounded-2xl bg-gradient-to-r from-pink-100 to-purple-100 border border-purple-200 shadow">
          <p class="font-bold text-gray-800 mb-1 text-sm md:text-base">${bf.name}:</p>
          <p class="text-gray-700 text-sm md:text-base leading-relaxed">${state.message}</p>
        </div>
      `
      : `
        <div class="mb-5 text-center text-gray-500 text-sm italic">
          Choose an action to see how he reacts...
        </div>
      `
  }
</div>


          <div class="grid grid-cols-2 gap-3">
            <button data-action="kiss"
              class="vb-hover-pulse relative overflow-hidden w-full px-3 py-2 md:px-4 md:py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white text-sm md:text-base font-semibold shadow border-2 border-white flex items-center justify-center gap-1">
              <span>💋</span><span>Kiss</span>
            </button>

            <button data-action="argue"
              class="vb-hover-pulse relative overflow-hidden w-full px-3 py-2 md:px-4 md:py-3 rounded-full bg-gradient-to-r from-rose-400 to-rose-500 text-white text-sm md:text-base font-semibold shadow border-2 border-white flex items-center justify-center gap-1">
              <span>🔥</span><span>Argue</span>
            </button>

            <button data-action="flirt"
              class="vb-hover-pulse relative overflow-hidden w-full px-3 py-2 md:px-4 md:py-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 text-white text-sm md:text-base font-semibold shadow border-2 border-white flex items-center justify-center gap-1">
              <span>💌</span><span>Flirt</span>
            </button>

            <button data-action="tease"
              class="vb-hover-pulse relative overflow-hidden w-full px-3 py-2 md:px-4 md:py-3 rounded-full bg-gradient-to-r from-violet-400 to-violet-500 text-white text-sm md:text-base font-semibold shadow border-2 border-white flex items-center justify-center gap-1">
              <span>✨</span><span>Tease</span>
            </button>

            <button data-action="talk"
              class="vb-hover-pulse relative overflow-hidden w-full px-3 py-2 md:px-4 md:py-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 text-white text-xs md:text-sm font-semibold shadow border-2 border-white flex items-center justify-center gap-1">
              <span>💬</span><span>Talk</span>
            </button>

            <button id="vb-breakup"
              class="vb-hover-pulse relative overflow-hidden w-full px-3 py-2 md:px-4 md:py-3 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 text-white text-sm md:text-base font-semibold shadow border-2 border-white flex items-center justify-center gap-1">
              <span>💔</span><span>Break Up</span>
            </button>
          </div>
          <div class="mt-5 w-full">
            <div class="text-sm font-semibold text-gray-700 mb-2">Conversation Log</div>
            <div id="vb-log-box">
              ${logItems || `<div class="text-xs text-gray-500 italic">No messages yet.</div>`}
            </div>
          </div>

        </div>
      </div>
      </div>
    </div>

    ${state.showBreakupConfirm ? `
    <div class="vb-modal-backdrop">
      <div class="vb-modal">
        <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-3">Are you sure you want to break up?</h3>
        <p class="text-sm md:text-base text-gray-700 mb-5">
          This will reset the game and you will lose your relationship with ${bf.name}.
        </p>
        <div class="flex justify-center gap-3">
          <button id="vb-confirm-yes" class="px-4 py-2 rounded-full text-white bg-gradient-to-r from-rose-500 to-rose-600 shadow">Yes, break up</button>
          <button id="vb-confirm-no" class="px-4 py-2 rounded-full text-gray-700 bg-white shadow border">No, stay together</button>
        </div>
      </div>
    </div>
    ` : ``}
    ${state.showDeleteConfirm ? `
    <div class="vb-modal-backdrop">
      <div class="vb-modal text-center">
        <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-2">Delete all data?</h3>
        <p class="text-sm md:text-base text-gray-700 mb-4">Are you sure you want to delete all saved data?</p>
        <div class="flex justify-center gap-3">
          <button type="button" id="vb-delete-yes" class="vb-modal-btn px-4 py-2 rounded-full text-white bg-gradient-to-r from-rose-500 to-rose-600 shadow font-semibold">Yes</button>
          <button type="button" id="vb-delete-no" class="vb-modal-btn px-4 py-2 rounded-full text-gray-700 bg-white shadow border font-semibold">No</button>
        </div>
      </div>
    </div>
    ` : ``}
    ${state.showEventPopup && state.currentEvent ? `
    <div id="vb-event-popup" class="vb-modal-backdrop">
      <div class="vb-modal vb-event-blur-in" style="max-width: 500px; background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px);">
        ${state.eventMessages.length > 0 ? `
          <div class="message-log" style="max-height: 400px; overflow-y: auto;">
            ${state.eventMessages.slice(0, state.eventMessagesVisible).map((msg) => `
              <div class="message-bubble ${msg.sender} vb-message-fade-in" style="display: flex; align-items: flex-start; margin-bottom: 12px; ${msg.sender === 'player' ? 'justify-content: flex-end;' : ''}">
                ${msg.sender === 'boyfriend' ? `<div class="message-avatar" style="font-size: 24px; margin-right: 10px; width: 40px; height: 40px; background: #f3f4f6; border: 2px solid #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">${msg.emoji}</div>` : ''}
                <div class="message-content" style="background: ${msg.sender === 'boyfriend' ? '#f3f4f6' : '#ddd6fe'}; padding: 12px 16px; border-radius: 16px; max-width: 70%;">
                  <p style="margin: 0; color: #1f2937; font-size: 15px;">${msg.text}</p>
                </div>
                ${msg.sender === 'player' ? `<div class="message-avatar" style="font-size: 18px; font-weight: bold; margin-left: 10px; width: 40px; height: 40px; background: #8b5cf6; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">${msg.initial}</div>` : ''}
              </div>
            `).join('')}
            ${state.eventShowingTyping ? `
              <div class="message-bubble typing" style="display: flex; align-items: flex-start; margin-bottom: 12px;">
                ${state.eventMessages[state.eventMessagesVisible]?.sender === 'boyfriend' ? `<div class="message-avatar" style="font-size: 24px; margin-right: 10px; width: 40px; height: 40px; background: #f3f4f6; border: 2px solid #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">${state.eventMessages[state.eventMessagesVisible]?.emoji || '💬'}</div>` : ''}
                <div class="message-content" style="background: ${state.eventMessages[state.eventMessagesVisible]?.sender === 'boyfriend' ? '#f3f4f6' : '#ddd6fe'}; padding: 12px 16px; border-radius: 16px;">
                  <div class="vb-typing-indicator" style="color: #6b7280;">
                    <span></span><span></span><span></span>
                  </div>
                </div>
                ${state.eventMessages[state.eventMessagesVisible]?.sender === 'player' ? `<div class="message-avatar" style="font-size: 18px; font-weight: bold; margin-left: 10px; width: 40px; height: 40px; background: #8b5cf6; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">${state.eventMessages[state.eventMessagesVisible]?.initial || 'Y'}</div>` : ''}
              </div>
            ` : ''}
          </div>
          ${state.eventMessagesVisible >= state.eventMessages.length ? `
          <div class="flex justify-center mt-4">
            <button id="vb-event-continue" class="vb-hover-pulse px-6 py-2 rounded-full text-white font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105" style="background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);">Continue</button>
          </div>
          ` : ''}
        ` : `
          <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-4">${personalize(state.currentEvent.prompt)}</h3>
          <div class="flex justify-center gap-3">
            <button id="vb-event-yes" class="vb-modal-btn px-6 py-2 rounded-full text-white font-semibold" style="background: linear-gradient(135deg, #22c55e 0%, #10b981 100%);">Yes</button>
            <button id="vb-event-no" class="vb-modal-btn px-6 py-2 rounded-full text-white font-semibold" style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);">No</button>
          </div>
        `}
      </div>
    </div>
    ` : ``}
  `;

  root.querySelectorAll("[data-action]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-action");
      handleAction(action, btn);
    });
  });
  setupCooldownOverlays(root);

  // Add hover sound to trait badges
  root.querySelectorAll(".vb-trait-badge").forEach((badge) => {
    badge.addEventListener("mouseenter", () => {
      playTraitHoverSound();
    });
  });

  const breakupBtn = root.querySelector("#vb-breakup");
  breakupBtn.addEventListener("click", handleBreakup);

  const confirmYes = root.querySelector("#vb-confirm-yes");
  const confirmNo = root.querySelector("#vb-confirm-no");
  if (confirmYes && confirmNo) {
    confirmYes.classList.add("vb-modal-btn");
    confirmNo.classList.add("vb-modal-btn");
    confirmYes.addEventListener("click", async () => {
      [confirmYes, confirmNo].forEach((btn) => btn.classList.remove("vb-modal-selected", "vb-modal-press"));
      void confirmYes.offsetWidth;
      confirmYes.classList.add("vb-modal-press", "vb-modal-selected");
      const backdrop = document.querySelector(".vb-modal-backdrop");
      const modalBox = document.querySelector(".vb-modal");
      if (backdrop) backdrop.classList.add("vb-modal-hide");
      if (modalBox) modalBox.classList.add("vb-modal-hide");

      setTimeout(async () => {
        state.showBreakupConfirm = false;
        triggerEnding("breakup");
      }, 320);
    });
    confirmNo.addEventListener("click", () => {
      [confirmYes, confirmNo].forEach((btn) => btn.classList.remove("vb-modal-selected", "vb-modal-press"));
      void confirmNo.offsetWidth;
      confirmNo.classList.add("vb-modal-press", "vb-modal-selected");
      const backdrop = document.querySelector(".vb-modal-backdrop");
      const modalBox = document.querySelector(".vb-modal");
      if (backdrop) backdrop.classList.add("vb-modal-hide");
      if (modalBox) modalBox.classList.add("vb-modal-hide");
      setTimeout(() => {
        state.showBreakupConfirm = false;
        [confirmYes, confirmNo].forEach((btn) => btn.classList.remove("vb-modal-selected", "vb-modal-press"));
        if (modalBox) modalBox.remove();
        if (backdrop) backdrop.remove();
      }, 420);
    });
  }

  // Event popup handlers
  const eventYes = root.querySelector("#vb-event-yes");
  const eventNo = root.querySelector("#vb-event-no");
  if (eventYes && eventNo) {
    eventYes.addEventListener("click", () => {
      handleEventResponse(true);
    });
    eventNo.addEventListener("click", () => {
      handleEventResponse(false);
    });
  }

  // Event message log continue button
  const eventContinue = root.querySelector("#vb-event-continue");
  if (eventContinue) {
    eventContinue.addEventListener("click", () => {
      const backdrop = document.getElementById("vb-event-popup");
      const modal = backdrop ? backdrop.querySelector(".vb-modal") : null;

      if (backdrop) backdrop.classList.add("vb-modal-hide");
      if (modal) modal.classList.add("vb-modal-hide");

      setTimeout(() => {
        state.showEventPopup = false;
        state.currentEvent = null;
        state.eventMessages = [];
        if (backdrop) backdrop.remove();
        // Update UI without full re-render to prevent page jump
        updateGameUI();
        updateLogUI();
      }, 180);
    });
  }
}

// --- ENDING SCREEN ---

function renderEnding(root) {
  const bf = state.ending?.boyfriend || state.boyfriend;

  const isPerfect = state.message.includes("Perfect Ending");
  const isChaotic = state.message.includes("Chaotic Ending");
  const isBreakup = state.ending?.type === "breakup";
  const isBad = state.ending?.type === "affection0" || state.ending?.type === "trust0";

  // Use a whole heart for perfect/chaotic endings, broken heart for breakup/bad endings
  const title = isPerfect
    ? "❤️ Perfect Ending!"
    : isChaotic
    ? "❤️ Chaotic Ending!"
    : (isBreakup || isBad)
    ? "💔 Ending"
    : "❤️ Ending";

  // Show boyfriend image for good endings, broken heart only for breakup/bad endings
  const displayImage = (isBreakup || isBad) ? "💔" : (bf ? bf.image : "💔");

  root.innerHTML = `
    <div class="vb-fade-in min-h-[60vh] flex items-center justify-center">
      <div class="vb-blur-content ${state.showMenu ? "is-blurred" : ""}">
      <div class="bg-white/95 rounded-3xl shadow-2xl border-4 border-white/80 max-w-xl w-full p-6 md:p-8 text-center">
        <div class="text-5xl md:text-6xl mb-4">
          ${displayImage}
        </div>
        <h1 class="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          ${title}
        </h1>
        ${
          state.ending && state.ending.portrait
            ? `<div class="mb-4 flex justify-center">
                 <div class="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-2 border-white">
                   <img src="${state.ending.portrait}" alt="${bf ? bf.name : "Ending"} portrait" class="w-full h-full object-cover">
                 </div>
               </div>`
            : ""
        }
        <p class="text-sm md:text-lg text-gray-700 leading-relaxed mb-6 max-w-xl mx-auto bg-white/70 border border-white/80 rounded-2xl p-4 shadow-inner">
          ${state.ending?.message || state.message}
        </p>
        <button
          id="vb-restart"
          class="vb-hover-pulse px-6 md:px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-bold text-sm md:text-base shadow-lg"
        >
          Start Over ✨
        </button>
      </div>
      </div>
    </div>
    ${""}
  `;

  const restartBtn = root.querySelector("#vb-restart");
  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      fadeOutAudio(bgMusic, 800);
      whiteTransition(() => {
        bgMusicFaded = false;
        restartGame();
      });
    });
  }
}

// --- DELETE CONFIRM FOR GAME WITHOUT FULL RERENDER ---
function showDeleteConfirmGame() {
  // avoid duplicate
  const existing = document.getElementById("vb-delete-modal-game");
  if (existing) existing.remove();

  const y = window.scrollY;
  const backdrop = document.createElement("div");
  backdrop.id = "vb-delete-modal-game";
  backdrop.className = "vb-modal-backdrop";
  backdrop.innerHTML = `
    <div class="vb-modal text-center">
      <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-2">Delete all data?</h3>
      <p class="text-sm md:text-base text-gray-700 mb-4">Are you sure you want to delete all saved data?</p>
      <div class="flex justify-center gap-3">
        <button id="vb-delete-yes" class="vb-modal-btn px-4 py-2 rounded-full text-white bg-gradient-to-r from-rose-500 to-rose-600 shadow font-semibold">Yes</button>
        <button id="vb-delete-no" class="vb-modal-btn px-4 py-2 rounded-full text-gray-700 bg-white shadow border font-semibold">No</button>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);

  const yesBtn = backdrop.querySelector("#vb-delete-yes");
  const noBtn = backdrop.querySelector("#vb-delete-no");
  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
      deleteAllData();
      cleanup();
      render();
      window.scrollTo(0, y);
    });
  }
  if (noBtn) {
    noBtn.addEventListener("click", () => {
      cleanup();
      window.scrollTo(0, y);
    });
  }

  function cleanup() {
    const modal = document.getElementById("vb-delete-modal-game");
    if (modal) modal.remove();
  }
}

function showPrivacyModal() {
  const existing = document.getElementById("vb-privacy-modal");
  if (existing) existing.remove();
  const backdrop = document.createElement("div");
  backdrop.id = "vb-privacy-modal";
  backdrop.className = "vb-modal-backdrop";
  backdrop.innerHTML = `
    <div class="vb-modal text-center max-w-lg">
      <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-3">Privacy</h3>
      <p class="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
        Algorithmically Yours&trade; stores all game data locally on your device.<br>
        No account, server, developer, or external entity can access your save data without cosmic superpowers.<br>
        You may delete all stored data at any time through the in-game Menu &rarr; Delete Profile.
      </p>
      <p class="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
        No tracking.<br>
        No analytics.<br>
        No snooping.<br>
        Just your questionable choices and the boyfriend you picked.
      </p>
      <button id="vb-privacy-close" class="vb-modal-btn px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow">
        Dismiss
      </button>
    </div>
  `;
  document.body.appendChild(backdrop);
  const closeBtn = backdrop.querySelector("#vb-privacy-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      closeBtn.classList.remove("vb-modal-press", "vb-modal-selected");
      void closeBtn.offsetWidth;
      closeBtn.classList.add("vb-modal-press", "vb-modal-selected");
      const modalBox = backdrop.querySelector(".vb-modal");
      backdrop.classList.add("vb-modal-hide");
      if (modalBox) modalBox.classList.add("vb-modal-hide");
      setTimeout(() => {
        backdrop.remove();
      }, 320);
    });
  }
}

// --- INIT ---

document.addEventListener("DOMContentLoaded", () => {
  initHoverSound();
  initBgMusic();
  loadAudioSettings();
  loadProfile();
  const primeOnce = () => {
    primeHoverSounds();
    ensureBgMusicPlaying();
    document.removeEventListener("pointerdown", primeOnce, true);
    document.removeEventListener("keydown", primeOnce, true);
    document.removeEventListener("pointermove", primeOnce, true);
  };
  document.addEventListener("pointerdown", primeOnce, true);
  document.addEventListener("keydown", primeOnce, true);
  document.addEventListener("pointermove", primeOnce, true);
  document.addEventListener(
      "mouseenter",
      (e) => {
        const target = e.target;
        if (target && target.tagName === "BUTTON") {
          const primaryIds = ["vb-start-btn", "vb-pref-continue", "vb-transition-continue", "vb-slider-continue"];
        let alt = true;
        if (primaryIds.includes(target.id)) {
          alt = false;
        } else {
          alt =
            // quiz answers & sliders
            target.classList.contains("quiz-option") ||
            target.classList.contains("heart-scale-btn") ||
            // menu buttons / menu pop
            target.classList.contains("vb-menu-trigger") ||
            target.closest(".vb-menu-pop") ||
            // interaction buttons
            target.hasAttribute("data-action") ||
            target.id === "vb-breakup";
        }
        playHoverSound(alt);
      }
    },
    true
  );
  document.addEventListener("click", (e) => {
    const actionBtn = e.target.closest("[data-action]");
    const btn = e.target.closest("button");
    if (actionBtn) {
      playInteractionSound();
    } else if (btn) {
      const id = (btn.id || "").toLowerCase();
      const classes = btn.className || "";

      // Back button, breakup cancel button, credits close button, and privacy close button
      if (id.includes("back") || id === "vb-confirm-no" || id === "vb-credits-close" || id === "vb-privacy-close") {
        playBackSound();
      }
      // Breakup button - use interaction sound
      else if (id === "vb-breakup") {
        playInteractionSound();
      }
      // Start, Continue, Yes/No (except breakup no), Dismiss buttons (except privacy) - use Confirm sound
      else if (id.includes("start") ||
               id.includes("continue") ||
               (id.includes("yes") && id !== "vb-confirm-no") ||
               (id.includes("no") && id !== "vb-confirm-no") ||
               (id.includes("dismiss") && id !== "vb-privacy-close") ||
               id.includes("confirm")) {
        playConfirmSound();
      }
      // Quiz answer buttons and menu items - use Select sound
      else if (classes.includes("quiz-option") ||
               classes.includes("vb-menu-item") ||
               id.includes("menu") ||
               id.includes("option")) {
        playSelectSound();
      }
      // Default - use Confirm sound
      else {
        playConfirmSound();
      }
    }
    const link = e.target.closest("#vb-privacy-link");
    if (link) {
      e.preventDefault();
      showPrivacyModal();
    }
  });

  // Add typing sound to input fields
  document.addEventListener("input", (e) => {
    const target = e.target;
    if (target && target.tagName === "INPUT" && target.type !== "checkbox" && target.type !== "radio") {
      playTapSound();
    }
  }, true);

  render();
});

function loadProfile() {
  try {
    const saved = localStorage.getItem("vb_player_profile");
    console.log("=== LOAD PROFILE ===");
    console.log("Raw saved data from localStorage:", saved ? saved.substring(0, 200) : "null");

    if (saved) {
      const parsed = JSON.parse(saved);
      console.log("Parsed profile:", {
        name: parsed.name,
        hasMatchedBefore: parsed.hasMatchedBefore,
        hasCurrentRun: !!(parsed.currentRun && parsed.currentRun.active),
        profileKeys: Object.keys(parsed)
      });

      state.playerProfile = parsed;
      // Do not auto-load a saved secret; require re-entry each run
      state.playersecret = "";

      // Don't auto-load game state - always show intro screen
      // The "Continue" button will handle loading the appropriate state
      console.log("Profile loaded. Player will see intro screen with Continue button.");
    } else {
      console.log("No saved profile found in localStorage");
    }
  } catch (e) {
    console.warn("Profile load failed", e);
  }
}

function saveProfile() {
  try {
    if (state.playerProfile) {
      const stringified = JSON.stringify(state.playerProfile);
      localStorage.setItem("vb_player_profile", stringified);

      // Parse it back to see what was actually saved
      const whatWasSaved = JSON.parse(stringified);

      console.log("Profile saved:", {
        name: state.playerProfile.name,
        hasMatchedBefore: state.playerProfile.hasMatchedBefore,
        hasCurrentRun: !!state.playerProfile.currentRun,
        profileKeys: Object.keys(state.playerProfile)
      });
      console.log("STRINGIFIED profile that was saved to localStorage:", stringified.substring(0, 500));
      console.log("hasMatchedBefore in parsed saved data:", whatWasSaved.hasMatchedBefore);
    } else {
      console.warn("Attempted to save but playerProfile is null/undefined");
    }
  } catch (e) {
    console.warn("Profile save failed", e);
  }
}

function deleteAllData() {
  try {
    localStorage.removeItem("vb_player_profile");
  } catch (e) {
    console.warn("Profile delete failed", e);
  }
  state.playerProfile = null;
  state.quizStarted = false;
  state.nameError = "";
   state.playersecret = "";
   state.showSecretForm = false;
   state.playerArchetype = null;
   state.playerArchetypeDone = false;
   state.playerArchetypeScores = {
     Quirky: 0,
     Motherly: 0,
     Icy: 0,
     Difficult: 0,
     Bubbly: 0
   };
  restartGame();
}

function persistCurrentRun() {
  if (!state.boyfriendType) return;

  console.log("=== persistCurrentRun START ===");
  console.log("Before any changes, state.playerProfile:", state.playerProfile);

  // Ensure playerProfile exists (create if needed for first match)
  if (!state.playerProfile) {
    state.playerProfile = {};
  }

  // Ensure the profile has required properties
  state.playerProfile.endings = state.playerProfile.endings || [];
  state.playerProfile.settings = state.playerProfile.settings || {};

  // Preserve the name if it exists in state.playerProfile
  // (This is important because name might have been entered but not saved yet)
  if (!state.playerProfile.name) {
    console.warn("Profile has no name when persisting run. This shouldn't happen.");
  }

  console.log("About to set hasMatchedBefore = true");
  console.log("state.playerProfile before setting:", JSON.stringify(state.playerProfile, null, 2));

  // Mark that this profile has matched with a boyfriend at least once
  state.playerProfile.hasMatchedBefore = true;

  console.log("Just set hasMatchedBefore = true");
  console.log("state.playerProfile.hasMatchedBefore is now:", state.playerProfile.hasMatchedBefore);
  console.log("Full profile after setting:", JSON.stringify(state.playerProfile, null, 2));
  state.playerProfile.currentRun = {
    active: true,
    boyfriendType: state.boyfriendType,
    affection: state.affection,
    trust: state.trust,
    chaos: state.chaos,
    message: state.message,
    interactionLog: state.interactionLog,
    scores: state.scores,
    currentQuestion: state.currentQuestion,
    quizHistory: state.quizHistory,
    prefCollected: state.prefCollected,
    prefAnswers: state.prefAnswers,
    playersecret: state.playersecret,
    playerArchetype: state.playerArchetype,
    playerArchetypeScores: state.playerArchetypeScores,
    playerArchetypeQuestion: state.playerArchetypeQuestion,
    playerArchetypeDone: state.playerArchetypeDone,
    quizStage: state.quizStage,
    showPlayerToBoyTransition: state.showPlayerToBoyTransition,
    interactionCount: state.interactionCount,
    nextEventAt: state.nextEventAt,
    triggeredThresholdEvents: state.triggeredThresholdEvents,
    cooldowns: state.cooldowns
  };

  console.log("After creating currentRun object:");
  console.log("state.playerProfile.hasMatchedBefore is:", state.playerProfile.hasMatchedBefore);
  console.log("About to call saveProfile()");
  console.log("=== persistCurrentRun END ===");

  saveProfile();
}

function clearSavedRun() {
  if (!state.playerProfile) return;
  state.playerProfile.currentRun = null;
  saveProfile();
}

function loadRun(run) {
  if (!run || !run.boyfriendType || !BoyfriendsData[run.boyfriendType]) return;

  // Create fade overlay
  const fadeOverlay = document.createElement('div');
  fadeOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 9999;
    pointer-events: none;
  `;
  document.body.appendChild(fadeOverlay);

  // Fade out to white
  setTimeout(() => {
    fadeOverlay.style.opacity = '1';
  }, 10);

  // Load the run state after fade out completes
  setTimeout(() => {
    state.gameState = "game";
    state.quizStarted = true;
    state.prefCollected = true;
    state.boyfriendType = run.boyfriendType;
    state.boyfriend = BoyfriendsData[run.boyfriendType];
    if (typeof run.affection === "number" && typeof run.trust === "number") {
      state.affection = run.affection;
      state.trust = run.trust;
      state.chaos = run.chaos ?? 0;
    } else {
      const init = getInitialStats();
      state.affection = init.affection;
      state.trust = init.trust;
      state.chaos = init.chaos;
    }
    state.message = run.message ?? "";
    state.interactionLog = run.interactionLog ?? [];
    state.scores = run.scores ?? state.scores;
    state.currentQuestion = run.currentQuestion ?? 0;
    state.quizHistory = run.quizHistory ?? [];
    state.prefCollected = run.prefCollected ?? state.prefCollected;
    state.prefAnswers = run.prefAnswers ?? state.prefAnswers;
    state.cooldowns = normalizeCooldowns(run.cooldowns);
    state.playersecret = run.playersecret ?? state.playersecret;
    state.playerArchetype = run.playerArchetype ?? state.playerArchetype;
    state.playerArchetypeScores = run.playerArchetypeScores ?? state.playerArchetypeScores;
    state.playerArchetypeQuestion = run.playerArchetypeQuestion ?? state.playerArchetypeQuestion;
    state.playerArchetypeDone = run.playerArchetypeDone ?? state.playerArchetypeDone;
    state.quizStage = run.quizStage ?? "boy";
    state.showPlayerToBoyTransition = false;
    state.showDeleteConfirm = false;
    render();

    // Fade in from white
    setTimeout(() => {
      fadeOverlay.style.opacity = '0';
      setTimeout(() => {
        fadeOverlay.remove();
      }, 400);
    }, 50);
  }, 450);
}


