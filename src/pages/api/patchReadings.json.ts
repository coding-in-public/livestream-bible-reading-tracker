import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { id, checked } = data;

  if (!id || checked === null) {
    return new Response(
      JSON.stringify({
        message: "Broken didnt provide id or checked status",
      })
    );
  }
  try {
    const res = await fetch(`http://localhost:3000/readings/${id}/`, {
      method: "PATCH",
      body: JSON.stringify({
        checked,
      }),
    });
    if (!res.ok) {
      throw new Error("endpoint not working");
    }
    const d = await res.json();
    if (!d) {
      throw new Error("endpoint not working");
    }
    return new Response(
      JSON.stringify({
        success: true,
      })
    );
  } catch (e) {
    if (e instanceof Error) {
      return new Response(
        JSON.stringify({
          message: "unknown error",
          success: false,
        }),
        {
          status: 500,
          statusText: e.message,
        }
      );
    }
    return new Response(
      JSON.stringify({
        message: "unknown error",
        success: false,
      }),
      {
        status: 500,
        statusText: "unknown error",
      }
    );
  }
};
