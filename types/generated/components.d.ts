import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectsTechstack extends Struct.ComponentSchema {
  collectionName: 'components_projects_techstacks';
  info: {
    displayName: 'techstack';
    icon: 'code';
  };
  attributes: {
    techtools: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    keywords: Schema.Attribute.String;
  };
}

export interface StakBackendStack extends Struct.ComponentSchema {
  collectionName: 'components_stak_backend_stacks';
  info: {
    displayName: 'Backend Stack';
  };
  attributes: {
    backEndStack: Schema.Attribute.String;
  };
}

export interface StakCloudEndStack extends Struct.ComponentSchema {
  collectionName: 'components_stak_cloud_end_stacks';
  info: {
    displayName: 'cloudEnd Stack';
  };
  attributes: {
    clouStack: Schema.Attribute.String;
  };
}

export interface StakFrontendStack extends Struct.ComponentSchema {
  collectionName: 'components_stak_frontend_stacks';
  info: {
    displayName: 'Frontend Stack';
  };
  attributes: {
    frontEndStack: Schema.Attribute.String;
  };
}

export interface SubFeatureMyServices extends Struct.ComponentSchema {
  collectionName: 'components_sub_feature_my_services';
  info: {
    displayName: 'My Services';
    icon: 'bulletList';
  };
  attributes: {
    features: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'projects.techstack': ProjectsTechstack;
      'seo.seo': SeoSeo;
      'stak.backend-stack': StakBackendStack;
      'stak.cloud-end-stack': StakCloudEndStack;
      'stak.frontend-stack': StakFrontendStack;
      'sub-feature.my-services': SubFeatureMyServices;
    }
  }
}
