import type { CSSProperties, FC, ReactNode } from 'react';
import {
  Box,
  Button,
  IconButton,
  Stack,
  Step,
  StepLabel,
  Stepper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import type { BoxProps } from '@mui/material/Box';
import type { StepIconProps } from '@mui/material/StepIcon';
import { BackdropLoader } from './BackdropLoader';
import PageTitle from './page/PageTitle';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export interface WizardStepType {
  element: ReactNode;
  label: string;
  title: string;
  Validator?: StepValidation | null;
  extra_action?: ExtraAction | null;
  hideLayoutWrapper?: boolean;
}

interface StepValidation {
  action?: ReactNode;
  is_valid?: boolean | (() => boolean);
  stepCallback?: () => void;
  stepHandler?: () => void;
  action_footer_hidden?: boolean;
}

type ExtraAction = {
  icon: JSX.Element;
  label: string;
  callback: () => void;
};

interface WizardProps extends BoxProps {
  steps: WizardStepType[];
  currentStep: number;
  handleNext: () => void;
  handlePrev: () => void;
  handleCancel?: () => void;
  handleStepperPrev: (_page: number) => void;
  LayoutWrapper?: FC<{ children: ReactNode }> | null;
}
export const Wizard = ({
  steps,
  currentStep,
  handleNext,
  handlePrev,
  handleCancel,
  handleStepperPrev,
  LayoutWrapper,
  ...rest
}: WizardProps) => {
  const current = steps[currentStep - 1];

  const { t } = useTranslation('common');

  const Next = () => {
    if (current?.Validator?.stepHandler) {
      current.Validator.stepHandler();
    } else {
      if (current?.Validator?.stepCallback) {
        current.Validator.stepCallback();
      }
      handleNext();
    }
  };

  const nextStepWithValidation = () => {
    if (Array.isArray(steps) && currentStep <= steps.length - 1) {
      if (current.Validator) {
        if (CheckButtonControl()) {
          Next();
        }
      } else {
        Next();
      }
    } else {
      if (!current.Validator || !current.Validator.stepCallback) {
        throw new Error('Step Validator.stepCallback is Mandatory for final step');
      } else {
        current.Validator.stepCallback();
      }
    }
  };

  const CheckButtonControl = () => {
    const control = current.Validator;
    if (control === null) {
      return true;
    }

    if (!Object.prototype.hasOwnProperty.call(control, 'is_valid')) {
      return true;
    } else {
      return !!(control && Object.prototype.hasOwnProperty.call(control, 'is_valid') && control?.is_valid);
    }
  };

  const handleCancelBtn = () => {
    if (handleCancel) {
      handleCancel();
    } else {
      handlePrev();
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box display={'flex'} flexDirection={'column'} {...rest}>
      <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'}>
        <Box display={'flex'} alignItems={'start'} flexDirection={'column'} width={'100%'}>
          <Box
            sx={{ px: 1 }}
            display={'flex'}
            width={'100%'}
            alignItems={'center'}
            justifyContent={isMobile ? 'space-between' : 'start'}
          >
            <IconButton
              sx={{
                fontSize: (theme) => ({
                  md: theme.typography.fontSize * 2.5,
                  lg: theme.typography.fontSize * 3,
                }),
              }}
              onClick={handlePrev}
            >
              <ArrowBackIcon fontSize={'inherit'} color={'inherit'} />
            </IconButton>
            {isMobile && (
              <Box color={'primary.main'} fontSize={'large'} fontWeight={'bold'} mr={3}>
                Step {currentStep.toString()}/{steps.length}
              </Box>
            )}
          </Box>
          <PageTitle title={steps[currentStep - 1].title} />
        </Box>
        {!isMobile && (
          <StepController
            stepsLabel={steps.map((StepNode) => StepNode.label)}
            currentStep={currentStep}
            handleStepperPrev={handleStepperPrev}
          />
        )}
      </Box>

      <Suspense fallback={<BackdropLoader />}>
        {LayoutWrapper && !current?.hideLayoutWrapper ? (
          <LayoutWrapper>{current['element']}</LayoutWrapper>
        ) : (
          <Box flexGrow={1} display={'flex'} flexDirection={'column'}>
            {current['element']}
          </Box>
        )}
      </Suspense>

      {!current?.Validator?.action_footer_hidden && (
        <Stack justifyContent={'space-between'} direction={'row'} spacing={1} flexWrap={'wrap'}>
          <Button onClick={handleCancelBtn}>{t('buttons.cancel')}</Button>
          <Stack direction={'row'}>
            {current.extra_action && (
              <Button
                sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}
                onClick={current.extra_action.callback}
              >
                {current.extra_action?.icon && current.extra_action.icon} {current.extra_action.label}
              </Button>
            )}

            <Button
              variant={'contained'}
              sx={{ minWidth: '140px' }}
              onClick={nextStepWithValidation}
              disabled={!CheckButtonControl()}
            >
              {current?.Validator?.action ?? t('buttons.next_step')}
            </Button>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

type StepController = {
  stepsLabel: string[];
  currentStep: number;
  handleStepperPrev: (_step: number) => void;
};
const StepController = ({ stepsLabel, currentStep, handleStepperPrev }: StepController) => {
  const handleSetStepper = (goToStep: number, isActive: boolean) => {
    if (isActive) {
      handleStepperPrev(goToStep);
    }
  };

  return (
    <Box>
      <Stepper activeStep={currentStep - 2} alternativeLabel>
        {stepsLabel.map((label, index) => (
          <Step
            key={label}
            sx={{
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              paddingX: { xs: 1 / 2, sm: 0.7, md: 2 },
              display: 'flex',
              fontSize: { xs: 'medium', md: 'x-large' },
              '& .MuiStepConnector-root': {
                top: '24px',
                left: 'calc(-50% + 25px)',
                right: 'calc(50% + 25px)',
                '& .MuiStepConnector-line': {
                  display: { sm: 'none', md: 'inherit' },
                  borderTopWidth: '3px',
                  borderColor: index < currentStep ? 'primary.main' : 'text.secondary',
                },
                '& .MuiStepLabel-iconContainer': {
                  display: { xs: 'none', sm: 'inherit' },
                },
              },
            }}
          >
            <StepLabel
              sx={{
                cursor: index + 1 < currentStep ? 'pointer' : 'default',
                '& .MuiStepLabel-iconContainer .MuiBox-root': {
                  background: (theme) => theme.palette.background.paper,
                  zIndex: 1,
                  position: 'relative',
                },
              }}
              onClick={() => handleSetStepper(index + 1, index + 1 < currentStep)}
              StepIconComponent={(stepIconProps: StepIconProps) => (
                <CustomStepIcon
                  {...stepIconProps}
                  isActive={currentStep === index + 1}
                  isPassed={index + 1 < currentStep}
                />
              )}
            >
              <Box
                sx={{
                  fontSize: 'small',
                  textAlign: 'center',
                  justifyContent: 'center',
                  display: { xs: 'none', sm: 'flex' },
                }}
              >
                {label}
              </Box>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

const CustomStepIcon = (props: StepIconProps & { isActive: boolean; isPassed: boolean }) => {
  const { isActive, isPassed } = props;

  const activeStyle: CSSProperties = {
    backgroundColor: 'transparent',
    color: getStepColor(isActive, isPassed),
  };

  return (
    <Box
      sx={{
        border: (theme) => `1px solid ${theme.palette.text.secondary}`,
        width: { xs: 30, md: 52 },
        height: { xs: 30, md: 52 },
        borderRadius: (theme) => theme.shape.borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: isActive || isPassed ? 'primary.main' : 'text.secondary',
        ...activeStyle,
      }}
    >
      {props.icon}
    </Box>
  );
};

const getStepColor = (isActive: boolean, isPassed: boolean): string => {
  if (isActive || isPassed) {
    return 'primary.main';
  } else {
    return 'text.secondary';
  }
};
