import colors from 'colors';
import { WebhookClient, ColorResolvable } from 'discord.js';
import { Embed } from '../utils/discord/Embed';
import fs from 'fs';
import path from 'path'; // Mejor usar path para construir rutas

type LogLevel = 'success' | 'error' | 'warn' | 'info' | 'log' | 'debug';

type LogWebhookEmbed = {
    enabledByDefault: boolean;
    image: string;
    color: string;
    title: string;
 };

 type LogWebhookEmbeds = Record<LogLevel, LogWebhookEmbed>;
