import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { AppProviders } from "App";
import { RequireAuth } from "contexts/auth/RequireAuth";
import TemplatesPage from "./TemplatesPage";

test("create template from scratch", async () => {
  const user = userEvent.setup();
  const router = createMemoryRouter(
    [
      {
        element: <RequireAuth />,
        children: [
          {
            path: "/templates",
            element: <TemplatesPage />,
          },
          {
            path: "/starter-templates",
            element: <div data-testid="new-template-page" />,
          },
        ],
      },
    ],
    { initialEntries: ["/templates"] },
  );
  render(
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>,
  );
  const createTemplateButton = await screen.findByRole("button", {
    name: "Create Template",
  });
  await user.click(createTemplateButton);
  await screen.findByTestId("new-template-page");
  expect(router.state.location.pathname).toBe("/starter-templates");
});
