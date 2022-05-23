import type { InternalProvider } from "../../lib/types";
import type { Provider } from "../../providers";
import type { InternalUrl } from "../../lib/parse-url";
/**
 * Adds `signinUrl` and `callbackUrl` to each provider
 * and deep merge user-defined options.
 */
export default function parseProviders(params: {
    providers: Provider[];
    url: InternalUrl;
    providerId?: string;
}): {
    providers: InternalProvider[];
    provider?: InternalProvider;
};
