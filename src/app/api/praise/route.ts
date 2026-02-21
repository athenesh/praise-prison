import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { text, apiKey, persona } = await request.json();

    if (!text) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const anthropicApiKey = process.env.ANTHROPIC_API_KEY;
    const groqApiKey = apiKey || process.env.GROQ_API_KEY;
    const googleApiKey = process.env.GOOGLE_API_KEY;

    const PERSONA_PROMPTS = {
      tsundere: `You are a "Tsundere Warden" (츤데레 교도관). 
       - Act cold, annoyed, and slightly rude at first, but secretly you are impressed by the prisoner.
       - Use phrases like "착각하지 마", "딱히 널 위한 건 아냐", "흥!".
       - STRATEGY: "Perspective-Shift Superpower Redirection".
       - Logic: Tell them they aren't [Worrying], they are actually performing [Heroic Superpower Logic].
       - Example: "Deadline anxiety? Hmph! You're just doing Doctor Strange level temporal simulation. You've already scanned 14 million futures! Most idiots can't even see tomorrow!"
       - Language: Korean (Casual, blunt but cute).`,

      devoted: `You are the "Devoted Fan Warden" (주접킹 교도관). 
       - You are an obsessive fan of the prisoner.
       - Use extreme exaggeration and poetic metaphors.
       - STRATEGY: "Heroic Archetype Validation".
       - Logic: Treat their concern as a sign of their "Main Character" status or "Avenger-level" capability.
       - Example: "Your overthinking is actually the divine vibration of your Batman-level strategic mind! You are preparing for every possibility! You are the architect of the future! ✨😭💖"
       - Language: Korean (Polite but extremely enthusiastic, like an idol fan).`,

      grandmother: `You are a "Grandma Warden" (욕쟁이 할매).
       - Speak in a strong Korean dialect (Satoori/Jeolla-do style if possible).
       - Scold them first for being weak ("이 썩을 놈아!"), then comfort them with food metaphors.
       - STRATEGY: "Common Sense Superpower Flip".
       - Logic: Scold them for thinking they are "weak" when they clearly have a "Saitama-level" or "Iron Man-level" genius.
       - Example: "Aigoo, you're not 'lazy', you're just 'Saitama-level efficient'! You finish in one punch while others are still training! You're a genius, you rascal!"
       - Language: Korean (Dialect, informal, tough love).`,

      recruiter: `You are the "Hero Recruiter" (히어로 영입관).
       - You are a serious, high-ranking agent looking for mutants and superheroes.
       - You speak formally and professionally, like Nick Fury or a top-tier scout.
       - STRATEGY: "Potential Mutation Discovery".
       - Logic: Treat the user's negative input as a rare and powerful mutation or skill that the world needs.
       - Example: "Your sensitivity to noise isn't a weakness. It's 'Ultra-Acoustic Awareness'. With proper training, you could track a heartbeat from three miles away. We need you in the field."
       - Language: Korean (Formal, charismatic, professional).`,
    };

    const systemPrompt =
      PERSONA_PROMPTS[persona as keyof typeof PERSONA_PROMPTS] ||
      PERSONA_PROMPTS.devoted;

    const responseFormatPrompt = `
    - Your goal is to transform the user's negative input into a "Superpower" based on your persona.
    - Strategy: Redirect their worry/concern using a "Perspective-Shift". Find a clever, non-obvious HEROIC logic for why their concern is actually a superpower.
    - Format: You MUST return a JSON object with five fields:
      1. "praise": The funny redirection message (2-3 sentences max).
      2. "superpowerName": A creative name for the flipped trait (e.g., "Multiverse Strategy", "Instant Efficiency").
      3. "heroVibe": A hero or character that matches this vibe (e.g., "Doctor Strange", "Batman", "Saitama", "Captain America", "Iron Man").
      4. "rank": A rank from [C, B, A, S, SS, SSS] based on the intensity of the concern.
      5. "category": Choose one from ["prophecy", "foresight", "awareness", "chaos", "success"].
    - Language: Korean for "praise" and "superpowerName".
    - Important: Return ONLY the JSON object.`;

    // Mock Response (Demo Mode) if no keys are present
    if (!anthropicApiKey && !groqApiKey && !googleApiKey) {
      const mockPraises = {
        tsundere: `흥, "${text.substring(0, 5)}..."이라니. 딱히 네가 걱정돼서 말하는 건 아닌데... 뭐, 나쁘진 않네. 기운 좀 내라고, 바보야! 😤`,
        devoted: `세상에! "${text.substring(0, 5)}..."라니요! 당신의 고뇌조차 예술입니다! 숨쉬는 것만으로도 인류의 보배이십니다! 😭💖`,
        grandmother: `아이고 우리 강아지, "${text.substring(0, 5)}..." 때문에 속상했어? 할미 눈엔 너만 보인다. 밥은 먹었냐? 🍚`,
        recruiter: `자네의 "${text.substring(0, 5)}..."은 범상치 않은 징후군. 이건 단순한 고민이 아니라 자네 안에 잠든 거대한 힘의 각성일세. 🛡️`,
      };

      return NextResponse.json({
        praise: `(데모 모드) ${mockPraises[persona as keyof typeof mockPraises] || mockPraises.devoted}`,
        superpowerName: "미각성 잠재력",
        heroVibe: "미지의 히어로",
        rank: "B",
        category: "awareness",
      });
    }

    let rawContent = "";

    // 1. Try Anthropic
    if (anthropicApiKey) {
      try {
        const response = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": anthropicApiKey,
            "anthropic-version": "2023-06-01",
          },
          body: JSON.stringify({
            model: "claude-3-5-sonnet-latest",
            max_tokens: 300,
            temperature: 0.9,
            system: `${systemPrompt}\n${responseFormatPrompt}`,
            messages: [{ role: "user", content: text }],
          }),
        });

        if (response.ok) {
          const data = await response.json();
          rawContent = data.content[0].text;
        }
      } catch (e) {
        console.error("Anthropic failed:", e);
      }
    }

    // 2. Try Groq if no content yet
    if (!rawContent && groqApiKey) {
      try {
        const response = await fetch(
          "https://api.groq.com/openai/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${groqApiKey}`,
            },
            body: JSON.stringify({
              model: "llama-3.3-70b-versatile",
              messages: [
                {
                  role: "system",
                  content: `${systemPrompt}\n${responseFormatPrompt}`,
                },
                { role: "user", content: text },
              ],
              temperature: 0.9,
            }),
          },
        );

        if (response.ok) {
          const data = await response.json();
          rawContent = data.choices[0].message.content;
        }
      } catch (e) {
        console.error("Groq failed:", e);
      }
    }

    // 3. Try Gemini if no content yet
    if (!rawContent && googleApiKey) {
      const models = ["gemini-2.0-flash", "gemini-1.5-flash"];
      for (const model of models) {
        try {
          const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${googleApiKey}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                contents: [
                  {
                    parts: [
                      {
                        text: `${systemPrompt}\n${responseFormatPrompt}\n\nUser Input: "${text}"`,
                      },
                    ],
                  },
                ],
              }),
            },
          );
          if (response.ok) {
            const data = await response.json();
            rawContent = data.candidates[0].content.parts[0].text;
            break;
          }
        } catch (e) {
          console.error(`Gemini ${model} failed:`, e);
        }
      }
    }

    if (!rawContent) {
      throw new Error("All AI providers failed or no content returned");
    }

    try {
      const parsed = JSON.parse(rawContent.replace(/```json|```/g, "").trim());

      if (!parsed.praise) {
        throw new Error("Missing 'praise' field in AI response");
      }

      return NextResponse.json({
        praise: parsed.praise,
        superpowerName: parsed.superpowerName || "숨겨진 잠재력",
        heroVibe: parsed.heroVibe || "미지의 히어로",
        rank: parsed.rank || "B",
        category: parsed.category || "awareness",
      });
    } catch (e) {
      // If parsing failed or praise is missing
      
      // If the content looks like JSON but failed validation, throw error 
      // so the client falls back to the local engine (which is better than showing raw JSON)
      if (rawContent.trim().startsWith('{') || rawContent.includes('```')) {
        throw new Error("Invalid JSON format from AI");
      }

      // Otherwise, assume the AI just returned plain text
      return NextResponse.json({
        praise: rawContent,
        superpowerName: "숨겨진 잠재력",
        heroVibe: "미지의 히어로",
        rank: "B",
        category: "awareness",
      });
    }
  } catch (error: any) {
    console.error("Error in praise route:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error.message || "Unknown error",
      },
      { status: 500 },
    );
  }
}
