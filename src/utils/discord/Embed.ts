import { APIEmbed, EmbedBuilder, EmbedData, ColorResolvable } from 'discord.js';

// Define los colores en un solo lugar para que sea fácil cambiarlos
const colors = {
    default: process.env.DEFAULT_COLOR as ColorResolvable | null,
    error: process.env.ERROR_COLOR as ColorResolvable | null,
};

// Clase base para nuestros embeds personalizados
class CustomEmbed extends EmbedBuilder {
    constructor(data?: EmbedData | APIEmbed) {
        super(data);
        // Por defecto, usamos el color principal
        this.setColor(colors.default);
    }

    // Un método `addField` mejorado y seguro
    public addField(name: string, value: string, inline = false): this {
        return this.addFields({
            name: name.substring(0, 256),
            value: value.substring(0, 1024),
            inline: inline,
        });
    }
}

// Embed especializado para errores que solo cambia el color
class ErrorEmbed extends CustomEmbed {
    constructor(data?: EmbedData | APIEmbed) {
        super(data);
        this.setColor(colors.error);
    }
}

export { CustomEmbed as Embed, ErrorEmbed };
